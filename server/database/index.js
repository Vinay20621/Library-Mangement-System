const mongoose=require('mongoose')
const {MONGO_URL}=require('../config/index.js')
 async function connect()
{
    try {
        const res=await mongoose.connect(MONGO_URL)
        console.log('database connect');
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=connect;

