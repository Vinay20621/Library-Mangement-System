const mongoose=require('mongoose');
const TeacherRequestSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    email:{type:String,required:true},
    collageName:{type:String,required:true},
   requestMessage:{type:String,required:true},
   request:{type:String,default:'pending'},



},
{timestamps:true})
module.exports = mongoose.model('TeacherRequest', TeacherRequestSchema, 'teacherRequest');