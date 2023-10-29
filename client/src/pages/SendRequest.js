import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
import NavBar from '../Component/NavBar'
const serverUrls='https://bakend-api-qg2w.onrender.com'


function SendRequest({active})
{
    const notify = (message) => toast.error(message);
    const notifySuccess = (message) => toast.success(message);

    const navigate=useNavigate()
    const [teacher,setTeacher]=useState({email:"",collageName:"",requestMessage:""})
    const location=useLocation()
 
    function handleFeild(e)
        {
            const name=e.target.name;
		      const value=e.target.value;

            setTeacher({...teacher,[name]:value})
        }
   
        
        async function Summit(event)
        {
            event.preventDefault()
           
          
            try {
                if(!teacher.email|| !teacher.collageName|| !teacher.requestMessage)
                {
                    notify("Input feild is required")
                    return navigate('/request',{
                      state:{
                        user:location.state.user,
                        active:'request'
                      },
                    })
                    
                    
                }	
                
                
                const res=await axios.post(serverUrls+'/userrequest/request',teacher,{
                  headers: {
                    'token': localStorage.getItem('token'),
                  },
                })
               
                
                if(res.data.status==='error')
                {
                    notify(res.data.message)
                    return navigate('/request',{
                      state:{
                        user:location.state.user,
                        active:'request'
                      },
                    })
                    
                    
                }
                
                notifySuccess("Success ! ")
                return navigate('/home',{
                  state:{
                    user:location.state.user,
                    active:'home'
                  },
                })
              
            } catch (error) {
                console.log(error)
            }
            
        }
    
	
    return (
        <>
<NavBar active={active} />
 <div className="container mt-3 form ">
 <ToastContainer />
 
      <form onSubmit={Summit}  className="mt-5 pt-3 pb-3">
  
        <div className="mb-3">
          <label for="title" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="title"
          value={teacher.email}          
          onChange={handleFeild}
            name="email"
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label for="title" className="form-label">Collage Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={teacher.collageName}
            onChange={handleFeild}
            name="collageName"
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label for="body">Request Message</label>
          <textarea name="requestMessage" className="form-control"  value={teacher.requestMessage}  onChange={handleFeild}
          id="body">
        
        </textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>

        </>
    )
}
 export default SendRequest;