const errorHandler = (err, req, res, next) => {
    console.log(err)
    let status = 500
    let message = 'Internal server error'

    if (err.name === 'unauthenticated' || err.name === 'JsonWebTokenError') {
        status = 401
        message = 'Invalid token'
    } else if (err.name === 'no_product') {
        status = 404
        message = 'Product not found'
    } else if (err.name === 'no_cart') {
        status = 404
        message = 'Cart not found'
    } else if (err.name === 'MidtransError') {
        status = 400
        message = err.ApiResponse.error_messages[0]
    }

    res.status(status).json({message})
}

module.exports = errorHandler