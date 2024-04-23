const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("My name is Harsh")
})
app.get('/login',(req,res)=>{
    res.send("<h1>please logIn</h1>")
    // res.send("han ho gya")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})      