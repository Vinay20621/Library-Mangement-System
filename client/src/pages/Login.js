
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import Lottie from 'lottie-react'
import Animation from '../Animation.json'

import {useNavigate} from 'react-router-dom'
const serverUrls='https://bakend-api-qg2w.onrender.com'
function Login() {
	const [field,setfield]=useState({email:"",password:""});
	const notify = (message) => toast.error(message);
	const navigate=useNavigate()
	function handleFeild(e)
	{
		const name=e.target.name;
		const value=e.target.value;
		setfield({...field,[name]:value})
	}
	async function handleSummit(event)
	{
		event.preventDefault()
		if(!field.email || !field.password )
		{
			notify("Input feild is required")
			return navigate('/login')
		}	
		
		try {
			const res=await axios.post(serverUrls+'/user/login',field)
			setfield({email:"",password:""})
			
			if(res.data.status==='error')
			{
				notify(res.data.message)
				return navigate('/login')
			}
			const token=res.data.token;
			if(!token)
			{
				notify(res.data.message)
				return navigate('/login')
			}
			localStorage.setItem('token', token)
			return navigate('/home',{
				state:{
					user:res.data.role,
					active:'home',
				},
			})
			
		} catch (error) {
			console.log(error)
		}
		
	}
	function signIn()
	{
		
		return navigate('/signin')
	}
  return (
	<div className="container form">
		<ToastContainer />
        <div className="row justify-content-around mt-5 pb-3">
           
            <div className="col-md-5 mb-5 pt-3">
			<Lottie animationData={Animation} />
            </div>
            <div className="col-md-5 mt-5 pt-3">
                <form onSubmit={handleSummit}>
                <div className="input-group mb-3">  
                    <span className="input-group-text" id="basic-addon1">@</span>          
            <input type="email" className="form-control" name="email" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1" value={field.email} onChange={handleFeild}/>
            </div>
			   <div className="input-group mb-3">            
            <input type="password" className="form-control" name="password" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" value={field.password} onChange={handleFeild}/>
            </div>
                <div className="row ">
                    <div className="col-lg-8 col-8 tex">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            <p className="bol">Remeber me</p>
                        </label>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary but" onClick={handleSummit}>Login</button>
                    </div>
					<button type="button" className="btn btn-primary but mt-3" onClick={ signIn}>Resister</button>
                  
                </div>
            </form>
               
            


        </div>
    </div>
	</div>
  );
}

export default Login;





