import User from '../Component/User'
import { useEffect, useState } from 'react';
import NavBar from '../Component/NavBar'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
const serverUrls='https://bakend-api-qg2w.onrender.com'
function AllTeacher({active})
{
  const [allTeacher,setAllTeacher]=useState([])
  const location=useLocation()
  const navigate=useNavigate()
  async function getUser()
  {
    try {
      
       const response=await axios.get(serverUrls+'/user/allteacher',{
        headers: {
          'token': localStorage.getItem('token'),
        },
      })
      
       if(response.data.status==="error")
       {
          return navigate('/home',{
            state:{
              user:"admin",
              active:'home'
            }})
          }
  
       
       setAllTeacher(response.data.data)
  
    }
      
catch (error) {
      console.log(error)
    }
  }
  
   useEffect(()=>
   {
    getUser();
   },[])
    
    return(
        <>
        <NavBar active={active}/>
       
          <div className=" container-fluid bg-light ">
    <div className="container">
      <div className="text-center pt-3">
       
        <h1>All Teacher</h1>
        <hr />
      </div>


      <div className="row">
        {
            allTeacher.map((teacher)=>
            {
                return(
                <div className="col-lg-4 col-md-6 col-sm-12" key={teacher._id}>
                  
                <User key={teacher.id}
                id={teacher._id}
                name={teacher.name}
                email={teacher.email}  
                            
                />
                </div>
                )
            })
        }
     </div>
     </div>
     </div>

        </>
    )
}
export default  AllTeacher;