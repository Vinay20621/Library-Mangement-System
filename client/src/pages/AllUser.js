import User from '../Component/User'
import { useEffect, useState } from 'react';
import NavBar from '../Component/NavBar'
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
const serverUrls='https://bakend-api-qg2w.onrender.com'
function AllUser({active})
{
  const [allUser,setAllUser]=useState([])
  const navigate=useNavigate()
  const location=useLocation()
  async function getUser()
  {
    try {
      
       const response=await axios.get(serverUrls+'/user/allUser',{
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
       setAllUser(response.data.data)
       

      
    } catch (error) {
      
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
        <h1>All Users</h1>
        <hr />
      </div>


      <div className="row">
        {
            allUser.map((user)=>
            {
                return(
                <div classNameName="col-lg-4 col-md-6 col-sm-12" key={user._id}>
                  
                <User key={user.id}
                id={user._id}
                name={user.name}
                email={user.email}  
                             
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
export default  AllUser;