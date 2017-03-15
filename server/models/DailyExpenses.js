var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DailyExpensesSchema   = new Schema({
    title:      { type: String, required: true },
    amount:     { type: String, required: true },
    date:       { type: String, required: true },    
    description:{ type: String },   
    created:    { type: Date, default: Date.now },
    updated:    { type: Date, default: Date.now },
});

module.exports = mongoose.model('DailyExpenses', DailyExpensesSchema);
