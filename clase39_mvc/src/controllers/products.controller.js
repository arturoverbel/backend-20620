const ProductModel = require('../models/products.model')

module.exports = {
    getProductController: async (req, res, next) => {
        try{
            const products = await ProductModel.find()

            res.render('products', { products } )
        } catch (e) {
            console.log(e)
            res.send('ERROR')
        }
    },

    getAPIProductController: async (req, res, next) => {
        try{
            const products = await ProductModel.find()

            res.json(products)
        } catch (e) {
            console.log(e)
            res.send('ERROR FROM API')
        }

    }
}