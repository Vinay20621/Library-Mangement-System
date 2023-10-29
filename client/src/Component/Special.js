import NavBar from "./NavBar";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
const serverUrls='https://bakend-api-qg2w.onrender.com'

function SpecificBook()
{
  const [book,setBook]=useState({title:'',author:"",body:"",coverImg:''})
  const {id}=useParams();
  const navigate=useNavigate()

  

  async function Check()
{
  try {
    
    const res=await axios.get(serverUrls+'/book/mybook/'+id,{
      headers: {
        'token': localStorage.getItem('token'),
      },
    })
          if(res.data.status!=='ok')
          {
              return navigate('/home')
          }
          return setBook(res.data.data)
    
          }
    
   catch (error) {
    console.log(error)
  }
  
}
  
      
     
  
useEffect(()=>
{
  Check()

},[])
    return(
        <>
      <NavBar active="home"/>
      <div className="text-center my-5">
        <div className="front-style-heading">{book.title}</div>
        <hr />
      </div>
<div className="container mt-5 text-center">
  
  
  <img src={book.coverImg} width="500px" className="img-fluid"  />
<h5 className="mt-3">Author: {book.author}</h5>
</div>
<div className="container mt-5 mb-4">
      
{book.body}

</div>




  
        </>
    )
}
 export default SpecificBook;