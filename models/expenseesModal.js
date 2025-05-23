const mongoose = require("mongoose");

const expenseesModal = mongoose.Schema({
    
        expensName : {
            type : String,
            required : true
        },
        expensAmount : {
            type : Number,
            required : true
        }
});

const expensees = mongoose.model('expens',expenseesModal);

module.exports = expensees;