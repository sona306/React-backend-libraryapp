const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const librarys=require("./models/library")

const app = express()
app.use(cors())

app.post("/view",(req,res)=>{
res.send("hello")
})

app.post("/search",(req,res)=>{
res.send("hii")
})

app.post("/delete",(req,res)=>{
    res.send("hii")
    })

app.post("/add",(req,res)=>{
    res.send("hii")
    })
app.listen(8082,()=>{
    console.log("server starts")
})