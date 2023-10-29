
import axios from 'axios'
import Button from "react-bootstrap/esm/Button";
import {useLocation, useNavigate} from 'react-router-dom'
const serverUrls='https://bakend-api-qg2w.onrender.com'
import coverImg from './img/userImg.png'
function User({id,name,email}) {
  const location=useLocation()
  const navigate=useNavigate()
 
  
 

  
async function deleteUser()
{    
  try {
    
    const res=await axios.get(serverUrls+'/user/deleteuser/'+id,{
      headers: {
        'token': localStorage.getItem('token'),
      },
    })
    
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


          <div className="card mb-5 shadow-sm">
            <img src={coverImg} className="img-fluid" />

            <div className="card-body">
              <div className="card-title">
              <div>
              <span>Name:</span> {name}
               </div>
               <div>
               <span>Email:</span> {email}
               </div>
              </div>
              
              <div className="card-text">
              
              
              <Button variant="danger" className='ms-1'onClick={deleteUser}>Delete</Button>{' '}
                  

                  
                 
                </div>
             
              
            </div>
          </div>
       
    </>
   
  );
}

export default User;