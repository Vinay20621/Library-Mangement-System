const User=require('../model/user')
const Book=require('../model/book')

async function allBook(req,res)
{
    try {
        const allBook=await Book.find({});
        return res.json({"status":"ok","data":allBook})
    } catch (error) {
        console.log(error)
    }
}
async function addPage(req,res)
{
    try {
        
        if(req.role!=='admin' && req.role!=='teacher')
        {
            
         return res.json({"status":"error","message":"unAuthorized"})
        }
      
        const {title,author,body,coverImg}=req.body;
        if(!title || !author || !body || !coverImg)
        {
            return res.json({"status":"error","message":"field is Empty"});
        }
        const mybook=await Book.create({
            title,author,body,coverImg
        })
        return res.json({"status":"ok","message":"created"});
        
    } catch (error) {
        console.log(error)
    }
}
async function deleteBook(req,res)
{
    try {
        if(req.role!=='admin' && req.role!=='teacher')
        {
            
         return res.json({"status":"error","message":"unAuthorized"})
        }
        const id=req.params.id        

        const allBook=await Book.findByIdAndDelete({_id:id});
        return res.json({"status":"ok","data":allBook})
    } catch (error) {
        console.log(error)
    }
}
async function myBook(req,res)
{
    try {
        
        const id=req.params.id        
      
        const myBook=await Book.findById({_id:id});
        return res.json({"status":"ok","data":myBook})
    } catch (error) {
        console.log(error)
    }
}
async function updateBook(req,res)
{
   
    try {
        
        if(req.role!=='admin' && req.role!=='teacher')
        {
            
         return res.json({"status":"error","message":"unAuthorized"})
        }
        
        const id=req.params.id   
        const item=await Book.findByIdAndUpdate({_id:id},
          { $set:{
            title:req.body.title,
            body:req.body.body,
            coverImg:req.body.coverImg,
            author:req.body.author,

    
          }})
          
          return res.json({"status":"ok","message":"success"})
      } catch (error) {
        console.log(error)
      }
}

  
module.exports={allBook,addPage,deleteBook,myBook,updateBook}