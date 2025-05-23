const mongoose = require("mongoose");

const budgetModel = mongoose.Schema({
    total_budget : {
        type : Number,
        required : true
    }
});

const totalBudgets = mongoose.model('totalBudget',budgetModel)

module.exports = totalBudgets;