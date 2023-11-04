const exp = require('constants');
const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`
    <h1>welcome!! This is Home Page </h1>
    <a href="/about">Go to about Page</a>

    `);
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="User Name" value="${req.query.name}" />
    <button>click me</button> <br>
    <a href="/">Go to Home Page</a><br>
    <a href="/help">Go to Help Page</a>
    `);
})

app.get('/help',(req,res)=>{
    res.send(`
    {
        name:'sachin',
    email:sachin@test.com
    }
    {
        name:'sam',
    email:sam@test.com
    }
    <br>
    <a href="/about">Go to About Page</a>
    `)
})


app.listen(5000);