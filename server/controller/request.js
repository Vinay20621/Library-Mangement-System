const User=require('../model/user')
const Request=require('../model/teacherRequest')

async function allRequest(req,res)
{
    try {
        const allRequests=await Request.find({});
        return res.json({"status":"ok","data":allRequests})
    } catch (error) {
        console.log(error)
    }
}
async function teacherRequest(req,res)
{
   
    try {
        const id=req.id
        const {email,collageName,requestMessage}=req.body
        
        const request= await Request.create({
            email,collageName,requestMessage,userId:id
        })
       
        
        return res.json({"status":"ok"})
    } catch (error) {
        console.log(error)
    }
}
async function acceptRequest(req,res)
{
   
    try {
        const id=req.params.id
        
        
        const user=await Request.findByIdAndDelete({_id:id})
        const item=await User.findByIdAndUpdate({_id:user.userId},
            { $set:{
              role:"teacher"
  
      
            }})
         
           

        
        return res.json({"status":"ok"})
    } catch (error) {
        console.log(error)
    }
}


module.exports={teacherRequest,acceptRequest,allRequest}