 
const express = require('express');
const res = require('express/lib/response');
 
const app = express();
 
 
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.get('/menu',(req,res)=>{
    res.render('index.ejs')
})
app.get('/menu/maincourse',async(req,res)=>{
    res.render('Main Course.ejs')
})
app.get('/menu/starters',async(req,res)=>{
    res.render('starters.ejs')
})
app.get('/menu/Biryani',(req,res)=>{
    res.render('Biryani.ejs')
})
app.get('/deserts/icecreams',(req,res)=>{
    res.render('icecreams.ejs')
})
app.get('/deserts/pastries',(req,res)=>{
    res.render('pastries.ejs')
})
app.get('/deserts/milkshake',(req,res)=>{
    res.render('milkshake.ejs')
})
 
app.listen('2080',( )=>{
    console.log("listening on the port 2080")
})