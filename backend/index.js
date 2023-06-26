const express = require("express");
const chats = require("./data/data");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT

app.listen(PORT,console.log("server started"));

app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})

app.get('/api/chats',(req,res)=>{
    res.send(chats)
})

app.get('/api/chats/:id',(req,res)=>{
    // console.log(req.params.id);
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
})
