const mongoose = require('mongoose');

const lodgingScheme = mongoose.Schema({
    name: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: Number, require: true },
    rating: { type: Number, require: true },
    popular: {type: Boolean, require: true}
})

module.exports = mongoose.model('Lodging', lodgingScheme)