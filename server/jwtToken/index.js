const jwt=require('jsonwebtoken')
const {KEY}=require('../config/index')
function signToken(playload,expireTime)
{
    try {
        
        return jwt.sign(playload,KEY,{expiresIn: expireTime})
    } catch (error) {
        console.log(error)
    }
}
 function verifyToken(token)
{
    try {
       return jwt.verify(token,KEY)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={signToken,verifyToken}
