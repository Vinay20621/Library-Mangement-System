
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react'
import Animation from '../Animation.json'
const serverUrls='https://bakend-api-qg2w.onrender.com'
function Resister() {
	const [field,setfield]=useState({name:"",email:"",password:"",rePassword:""});
	const navigate=useNavigate()
	const notify = (message) => toast.error(message);
	function handleFeild(e)
	{ 
		// notify()
		const name=e.target.name;
		const value=e.target.value;
		setfield({...field,[name]:value})
	}
	async function handleSummit(event)
	{
		event.preventDefault()
		if(!field.name || !field.email || !field.password || !field.rePassword)
		{
			notify("Input feild is required")
			return navigate('/signin')
		}
		else if(field.password!==field.rePassword)
		{
			notify("Password is not Match")
			return navigate('/signin')
		}
		try {
			// this is backend route
			const res=await axios.post(serverUrls+'/user/signin',field)
			
			
			if(res.data.status==='ok')
			{
				// this is frontent route
				notify(res.data.message)
				return navigate('/login')
			}
			
			// this is frontent route
			notify(res.data.message)
			
			return navigate('/signin')


		} catch (error) {
			console.log(error)
		}
		
	}
  return (

    <div className="container form">
		<ToastContainer />
        <div className="row justify-content-around mt-5 pb-3">
           
            <div className="col-md-5 mb-5">
			<Lottie animationData={Animation} />
            </div>
            <div className="col-md-5 mt-5 pt-3">
                <form onSubmit={handleSummit}>
                
                <div className="input-group mb-3">            
            <input type="text" className="form-control" name="name" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1" value={field.name} onChange={handleFeild}/>
            </div>

            
                <div className="input-group mb-3">  
                    <span className="input-group-text" id="basic-addon1">@</span>          
            <input type="email" className="form-control" name="email" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1" value={field.email} onChange={handleFeild}/>
            </div>
			   <div className="input-group mb-3">            
            <input type="password" className="form-control" name="password" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" value={field.password} onChange={handleFeild}/>
            </div>
			<div className="input-group mb-3">            
            <input type="password" className="form-control" name="rePassword" placeholder="Enter rePassword" aria-label="Username" aria-describedby="basic-addon1" value={field.rePassword} onChange={handleFeild}/>
            </div>

                <div className="row ">
                    <div className="col-lg-8 col-8 tex">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            <p className="bol">Remeber me</p>
                        </label>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary but">Resister</button>
                    </div>
                </div>
            </form>
               
            


        </div>
    </div>
	</div>
	



	
  );
  
}

export default Resister;




