const mongoose = require('mongoose');

const activitiesScheme = mongoose.Schema({
    name: {type: String, require: true},
    img: {type: String, require: true},
    url: {type: String}
})

module.exports = mongoose.model('Activities', activitiesScheme)