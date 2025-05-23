const express = require("express")
const path = require("path")
const port =8001;

const app=express();

const db = require("./config/db")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded())

let total_budget = require("./models/budgetModal");
let total_expenses = require("./models/expenseesModal");

app.get("/",async(req,res)=>{
    let totalBudget = await total_budget.find();
    let totalExpenses = await total_expenses.find();
    res.render("home",{
        totalBudget,
        totalExpenses
    });
})

app.post("/addbudget/:id",async (req,res)=>{
    let totalBudget = await total_budget.find();
    let newBudgetBody = req.body;
    let newBudget = parseInt(totalBudget[0].total_budget) + parseInt(req.body.total_budget);
    newBudgetBody = {...newBudgetBody,"total_budget":newBudget}
    console.log(newBudgetBody);
    
    
    
    
    await total_budget.findByIdAndUpdate(req.params.id,newBudgetBody)
    
    // total_budget.findByIdAndUpdate(req.body);
    return res.redirect("/")
    
})

app.post("/addexpense",(req,res)=>{
    total_expenses.create(req.body)
    return res.redirect("/")
})

app.get("/deleteExpense/:id",async(req,res)=>{
    await total_expenses.findByIdAndDelete(req.params.id);
    return res.redirect("/")
})

app.listen(port,(err)=>{
    err?console.log(err):console.log("server is running");
    ;
    
})