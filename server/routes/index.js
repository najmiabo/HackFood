const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')
const router = require('express').Router()

router.get('/discord-login', Controller.discordLogin)
router.get('/products', Controller.products)
router.get('/products/featured', Controller.getFeaturedProducts)
router.get('/categories', Controller.categories)

router.use(authentication)

router.get('/carts', Controller.carts)
router.post('/carts/:productId', Controller.createCart)
router.delete('/carts/:id', Controller.deleteCart)
router.patch('/carts/:id', Controller.patchCart)

router.post('/generate-midtrans-token', Controller.generateMidtransToken)
router.delete('/checkout', Controller.clearCartAfterPayment)
module.exports = router