const {
    User,
    Product,
    Cart,
    Category
} = require('../models')
const { Op } = require("sequelize");
const axios = require('axios')
const url = require('url')
const {
    signToken
} = require('../helpers/jwt')
const midtransClient = require('midtrans-client');

class Controller {

    static async discordLogin(req, res, next) {
        try {
            const {
                code
            } = req.query

            if (code) {
                const formData = new url.URLSearchParams({
                    client_id: process.env.DISCORD_CLIENT_ID,
                    client_secret: process.env.DISCORD_CLIENT_SECRET,
                    grant_type: 'authorization_code',
                    code: code.toString(),
                    redirect_uri: 'https://hackfood-b54c2.web.app'
                })

                const output = await axios.post('https://discord.com/api/v10/oauth2/token',
                    formData, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                    })

                if (output.data) {
                    const access = output.data.access_token

                    const userInfo = await axios.get('https://discord.com/api/v10/users/@me', {
                        headers: {
                            'Authorization': `Bearer ${access}`,
                        },
                    })

                    // console.log(output.data, userInfo.data, "<<<<<<<<<<<<")

                    const [user, isCreated] = await User.findOrCreate({
                        where: {
                            discord: userInfo.data.id
                        },
                        defaults: {
                            username: userInfo.data.username
                        },
                        hooks: false
                    });

                    const access_token = signToken({
                        id: user.id
                    })
                    
                    let isStatus = 200
                    if (isCreated) isStatus = 201

                    res.status(isStatus).json({
                        access_token
                    })
                }
            }
        } catch (err) {
            next(err)
        }
    }

    static async products(req, res, next) {
        try {
            const { search, filterCategory } = req.query
            const where = {}
            if (search) {
                where.name = {
                    [Op.iLike]: `%${search}%`
                }
            }
            if (filterCategory) {
                where.CategoryId = {
                    [Op.eq]: filterCategory
                }
            }

            const products = await Product.findAll({
                include: Category,
                order: [['CategoryId', 'ASC']],
                where
            })
            
            res.json(products)
        } catch (err) {
            next(err)
        }
    }

    static async categories(req, res, next) {
        try {
            const categories = await Category.findAll()
            res.json(categories)
        } catch (err) {
            next(err)
        }
    }

    static async carts(req, res, next) {
        try {
            const carts = await Cart.findAll({
                where: {
                    UserId: req.userId
                },
                include: Product,
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            
            res.json(carts)
        } catch (err) {
          next(err)  
        }
    }

    static async createCart(req, res, next) {
        try {
            const { productId } = req.params
            const product = await Product.findByPk(productId)
            if (!product) {
                throw {name: 'no_product'}
            }

            await Cart.create({
                UserId: req.userId,
                ProductId: product.id
            });

            res.status(201).json({message: 'Add new chart successfully'})
        } catch (err) {
            next(err)
        }
    }

    static async deleteCart(req, res, next) {
        try {
            const { id } = req.params
            const cart = await Cart.findByPk(id)
            if (!cart) {
                throw {name: 'no_cart'}
            }
            await Cart.destroy({
                where: {
                    id
                }
            })

            res.json({message: `Success delete from cart`})
        } catch (err) {
           next(err) 
        }
    }

    static async getFeaturedProducts(req, res, next) {
        try {
            const featuredProducts = await Category.findAll({
                include: {
                    model: Product,
                    limit: 1
                }
            })
            res.json(featuredProducts)
        } catch (err) {
           next(err) 
        }
    }

    static async patchCart(req, res, next) {
        try {
            const { qty } = req.body
            const { id } = req.params
            const cart = await Cart.findByPk(id)
            if (!cart) {
                throw {name: 'no_cart'}
            }
            await cart.increment('quantity', {by: qty}, {
                where: {
                    id: cart.id
                }
            })

            res.json({message: 'Cart updated successfully'})

        } catch (err) {
            next(err)
        }
    }

    static async generateMidtransToken(req, res, next) {
        try {
            let totalAmount = 0

            const user = await User.findByPk(req.userId)
            const carts = await Cart.findAll({
                where: {
                    UserId: req.userId
                },
                include: Product,
                order: [
                    ['updatedAt', 'DESC']
                ]
            })

            carts.forEach((el) => {
                totalAmount += el.Product.price * el.quantity
            })

            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction : false,
                serverKey : process.env.MIDTRANS_SERVER_KEY
            });

            let parameter = {
                "transaction_details": {
                    "order_id": "I-PROJECT-" + Math.floor(Math.random() * 1000000000),
                    "gross_amount": totalAmount
                },
                "credit_card":{
                    "secure" : true
                },
                "customer_details": {
                    username: user.username
                }
            };

            const midtransToken = await snap.createTransaction(parameter)
            res.status(201).json(midtransToken)
        } catch (err) {
           next(err) 
        }
    }

    static async clearCartAfterPayment(req, res, next) {
        try {
            await Cart.destroy({
                where: {
                    UserId: req.userId
                }
            })
            res.status(200).json({message: 'Thankyou for your order'})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller