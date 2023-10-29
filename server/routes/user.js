const express = require('express')
const auth=require('../middlewear/auth')
const router=express.Router()
const {signUp,login,deleteUser,allUser,allTeacher}=require('../controller/user')


router.post('/signin',signUp)
router.post('/login',login)
router.get('/deleteuser/:id',auth,deleteUser)
router.get('/alluser',auth,allUser)
router.get('/allteacher',auth,allTeacher)








module.exports=router