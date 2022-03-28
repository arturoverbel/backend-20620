const mongoose = require('mongoose')

const URL = "mongodb://127.0.0.1/coderhouse"
mongoose.connect(URL)

const ProductModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, require: true},
    price: {type: Number, require: true}
})

module.exports = mongoose.model('Product', ProductModel)