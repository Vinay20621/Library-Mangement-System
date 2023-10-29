const dotenv=require('dotenv').config()
const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL
const KEY=process.env.KEY
module.exports={PORT,MONGO_URL,KEY}