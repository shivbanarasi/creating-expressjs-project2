const express=require('express');

const route=express.Router();

route.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input typt="text" name="title"><input typt="text" name="number"><button type="submit">add product</button><form>')
});

route.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports=route;