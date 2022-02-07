 
const express = require('express');
const res = require('express/lib/response');
 
const app = express();
 
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
 res.send("this is a app")
}
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
 
app.listen(port,( )=>{
    console.log("listening on the port 3000")
})
