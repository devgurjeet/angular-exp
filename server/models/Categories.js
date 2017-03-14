var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CategoriesSchema   = new Schema({
    name:       { type: String, required: true },
    description:{ type: String },   
    created:    { type: Date, default: Date.now },
    updated:    { type: Date, default: Date.now },
});

module.exports = mongoose.model('Categories', CategoriesSchema);