const express = require('express')
const auth=require('../middlewear/auth')
const router=express.Router()

const {addPage,allBook,deleteBook,updateBook,myBook}=require('../controller/book')
router.post('/add',auth,addPage)
router.get('/allbook',allBook)
router.get('/mybook/:id',auth,myBook)
router.post('/updatebook/:id',auth,updateBook)
router.get('/delete/:id',auth,deleteBook)







module.exports=router