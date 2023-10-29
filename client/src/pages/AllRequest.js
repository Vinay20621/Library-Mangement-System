
import { useEffect, useState } from 'react';
import NavBar from '../Component/NavBar'
import axios from 'axios'

import Button from "react-bootstrap/esm/Button";


import coverImg from '../Component/img/userImg.png'
import {useLocation, useNavigate} from 'react-router-dom'
const serverUrls='https://bakend-api-qg2w.onrender.com'
function AllRequest({active})
{
  const [allRequest,setRequest]=useState([])
  const location=useLocation()
  const navigate=useNavigate()
  async function getRequest()
  {
    try {
      
       const response=await axios.get(serverUrls+'/userrequest/allrequest',{
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
       
       setRequest(response.data.data)
      }

      
    catch (error) {
      console.log(error)
    }
  }
  async function acceptRequest(id)
  {
    try {
      
       const response=await axios.get(serverUrls+'/userrequest/accept/'+id,{
        headers: {
          'token': localStorage.getItem('token'),
        },
      })
      
       if(response.data.status==="error")
       {
        return navigate('/allrequest',{
			state:{
				user:"admin",
        active:'request'
			},
		})
       }
       return navigate('/home',{
        state:{
            user:"admin",
            active:'home'
        },
    })
       

      
    } catch (error) {
      console.log(error)
    }
  }
  
   useEffect(()=>
   {
    getRequest();
   },[])
    
    return(
        <>
        <NavBar active={active} />
       
          <div className=" container-fluid bg-light ">
    <div className="container">
      <div className="text-center pt-3">
       
        <h1>All Request</h1>
        <hr />
      </div>


      <div className="row">
        {
            allRequest.map((request)=>
            {
                return(
                <div className="col-lg-4 col-md-6 col-sm-12" key={request._id}>
                  
                  <div className="card mb-5 shadow-sm">
            <img src={coverImg} className="img-fluid" />

            <div className="card-body">
              <div className="card-title">
              <div>
              <span>Email:</span> {request.email}
               </div>
               <div>
              <span>Collage:</span> {request.collageName}
               </div>
               <div>
               <span>Message:</span> {request.requestMessage}
               </div>
              </div>
              
              <div className="card-text">
              
              
              <Button variant="success" className='ms-1' onClick={()=>acceptRequest(request._id)}>Accept</Button>{' '}
                  

                  
                 
                </div>
             
              
            </div>
          </div>
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
export default  AllRequest;
