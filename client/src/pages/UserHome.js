import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Casoul from '../Component/Casoul'
import axios from 'axios';
import Button from "react-bootstrap/esm/Button";
import myIcon from '../Component/img/myIcon.png'

import Footer from '../Component/Footer'
import {useNavigate,useLocation} from 'react-router-dom'
const serverUrls='https://bakend-api-qg2w.onrender.com'

function NavBarHome() {
    const [allBook,setAllBook]=useState([])
	const location=useLocation()	
	
    const navigate=useNavigate()
    
    function signIn()
	{

		return navigate('/signin')
	}


	
    function logIn()
	{
		return navigate('/login')
	}
    function home()
	{
		return navigate('/',{
			state:{
				user:location.state.user,
			},
		})
		
	}
  
 
	function NavBar()
	{
		
			return  <> <Nav.Link onClick={home} active>Home</Nav.Link><Nav.Link onClick={logIn}>LogIn</Nav.Link> <Nav.Link onClick={signIn} >Resister</Nav.Link></>
		
	}
  
  async function getBook()
  {
    try {
       const response=await axios.get(serverUrls+'/book/allbook');
       

         setAllBook(response.data.data)
       
    

      
    } catch (error) {
      console.log(error)
    }
  }
  
   useEffect(()=>
   {
    getBook();
   },[])
	

  return (
	<>
   <Navbar  expand={'md'} bg="dark" data-bs-theme="dark">
	<Container fluid>
  <Navbar.Brand > <img src={myIcon} alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
      <span className='text-white ms-2'>Library Management System</span>   </Navbar.Brand>
	  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md `} />
	  <Navbar.Offcanvas
		id={`offcanvasNavbar-expand-md`}
		aria-labelledby={`offcanvasNavbarLabel-expand-md`}
		placement="end"
	  >
		<Offcanvas.Header closeButton>
		  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
			NavBar
		  </Offcanvas.Title>
		</Offcanvas.Header>
		<Offcanvas.Body>
		<Nav className="justify-content-end flex-grow-1 pe-3">
			<NavBar />
			</Nav>
		 
		</Offcanvas.Body>
	  </Navbar.Offcanvas>
	</Container>
  </Navbar>
  <Casoul/>
  <div className=" container-fluid bg-light ">
    <div className="container">
      <div className="text-center pt-3">
        <h1>Avilable Books</h1>
        <hr />
      </div>


      <div className="row">
        {
            allBook.map((post)=>
            {
                return(
                <div className="col-lg-4 col-md-6 col-sm-12" key={post._id}>
                 
                 <div className="card mb-5 shadow-sm">
            <img src={post.coverImg} className="img-fluid" />

            <div className="card-body">
              <div className="card-title">
                <div className="title front-style "> {post.title} </div>
               <div>
               Author: {post.author} 
               </div>
              </div>
              
              <div className="card-text">
              
              
              <Button variant="primary" onClick={logIn}>Log In</Button>{' '}
                  

                  
                 
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

     <Footer/> 
  </>
  );
}

export default NavBarHome;
