const express = require('express')
const auth=require('../middlewear/auth')
const router=express.Router()
const {teacherRequest, acceptRequest,allRequest}=require('../controller/request')

router.post('/request',auth,teacherRequest)
router.get('/allrequest',auth,allRequest)

router.get('/accept/:id',auth,acceptRequest)







module.exports=router