const express=require('express');
const app=express();
const path=require('path');
const login=require('./route')

//console.log(path.join(__dirname,'./route'))

//const staticpath=path.join(__dirname,'./route');

//app.use(express.static(staticpath));

app.get('/login',(req,res,next)=>{
    console.log(req.url)
    
   res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name"title"><button type="submit">add</button></form>');
})
app.use('/',login)

app.listen(4000);