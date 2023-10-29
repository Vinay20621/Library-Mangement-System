const express = require('express')
const {PORT}=require('./config/index')
const userRoute=require('./routes/user')
const requestRoute=require('./routes/request')

const homeRoute=require('./routes/book')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const router=require('router')
const connect=require('./database/index')



const app=express()
// cors is used to communicate between frontent and backend
app.use(cors(
    {
        origin:["https://frontent.onrender.com"],
        methods:["POST","GET"],
        credentials:true
    }
))
// frontent || postman give json data so your server not no json that why add 
app.use(express.json())

connect()
app.use(router())
app.use(cookieParser())

app.use('/user',userRoute)
app.use('/book',homeRoute)
app.use('/userrequest',requestRoute)


app.listen(PORT,()=>
{
    console.log(`server is running at port ${PORT}`)
})
