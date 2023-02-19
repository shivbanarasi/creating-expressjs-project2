const express=require('express');
const bodyparser=require('body-parser')
const app=express();

const adminroute=require('./route/admin');
const shopRoutes=require('./route/shop');

app.use(bodyparser.urlencoded())

app.use('/admin',adminroute);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(3000);