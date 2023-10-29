import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';





function Footer()
{
  return (<>
  <footer className="bg-dark text-white ">
 
    <div className="container-fluid">
    <div className="row  justify-content-center pt-3 pb-3">    
    <div className="col-1 ms-3 ">
      <h2><a href="https://www.instagram.com/vinay2001singh/" className='text-white'>< BsInstagram /></a></h2>
     
      </div>
      <div className="col-1 ms-3">
      <h2><a href="https://github.com/Vinay20621" className='text-white'>< BsGithub /></a></h2>      
     
      </div>
      
      <div className="col-1 ms-3">
      <h2><a href="https://portfolio-fh8s.onrender.com/" className='text-white'>< AiOutlineHome/></a></h2>  
       </div>
       <div className="col-1 ms-3">
      <h2><a href="https://www.linkedin.com/in/vinay-singh-01259722b" className='text-white'><  AiFillLinkedin/></a></h2>  
       </div>
       
    </div>
    <div className="row pb-3">
      <div className="col text-center">
  
      <div className="text-center"> 
      
          <h5> <i className="bi bi-c-circle "></i>@Copyright All Rights Reserves</h5>
        </div>
        </div> 
      </div>
    </div>
  
  </footer>
  </>)
}
export default Footer