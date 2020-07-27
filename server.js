const express=require('express');
const app=express();//express fun is a top level  function exported by the express module
//create express web server

//basic route
app.get('/',(req,res)=>{
    res.send('app is ready!');
});
app.get('/login',(req,res)=>{
    res.send(`
    <form>
    <h1>Login</h1>
    <input type="text" placeholder="username"/>
    <input type="password" placeholder="password"/>
    <button>login</button>
    </form>
    `);
});

//listen port
let port=5000;
app.listen(port,(err)=>{
    if (err) throw err;
    console.log("express server is running on port number"+port);
})