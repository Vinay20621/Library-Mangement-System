import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import myIcon from '../Component/img/myIcon.png'

import {useNavigate,useLocation} from 'react-router-dom'

function NavBarHome({active}) {
	const location=useLocation()	
	
	
	
    const navigate=useNavigate()
    
    function signIn()
	{

		return navigate('/signin')
	}
	function allUser()
	{

		return navigate('/alluser',{
			state:{
				user:location.state.user,
			},
		})
	}
	function allTeacher()
	{
		return navigate('/allteacher',{
			state:{
				user:location.state.user,
			},
		})
		
	}
	function addBook()
	{
		return navigate('/addbook',{
			state:{
				user:location.state.user,
			},
		})
		
	}
    function logIn()
	{
		return navigate('/login')
	}
    function home()
	{
		return navigate('/home',{
			state:{
				user:location.state.user,
			},
		})
		
	}
    function logOut()
	{
        localStorage. removeItem('token')
       
		return navigate('/home',{
			state:{
				user:'user',
			},
		})
	}
	async function sendRequest()
	{
		return navigate('/request',{
			state:{
				user:"student",
			},
		})
	}
	function Request()
	{
		return navigate('/allrequest',{
			state:{
				user:"admin",
			},
		})
			
		
	}
 
	function NavBar()
	{
		if(location.state.user==="admin")
		return <> <Nav.Link onClick={home} className={`${active=="home" && 'active'}`}>Home</Nav.Link><Nav.Link className={`${active=="addbook" && 'active'}`} onClick={addBook}>Add Book</Nav.Link><Nav.Link className={`${active=="alluser" && 'active'}`} onClick={allUser} >All-Users</Nav.Link><Nav.Link className={`${active=="allteacher" && 'active'}`} onClick={allTeacher}  >All-Teacher</Nav.Link><Nav.Link className={`${active=="allrequest" && 'active'}`} onClick={Request}>Request</Nav.Link><Nav.Link onClick={logOut}>Logout</Nav.Link></>
		else if(location.state.user==="teacher")
		return  <> <Nav.Link onClick={home} className={`${active=="home" && 'active'}`} >Home</Nav.Link><Nav.Link onClick={logOut}>Logout</Nav.Link> <Nav.Link className={`${active=="addbook" && 'active'}`} onClick={addBook}>Add Book</Nav.Link></>
		else if(location.state.user==="student")
		return  <> <Nav.Link onClick={home} className={`${active=="home" && 'active'}`} >Home</Nav.Link><Nav.Link className={`${active=="request" && 'active'}`} onClick={sendRequest}>Request</Nav.Link><Nav.Link onClick={logOut}>Logout</Nav.Link> </>
		else
		{

			return  <> <Nav.Link onClick={home} className={`${active=="home" && 'active'}`}>Home</Nav.Link><Nav.Link onClick={logIn}>LogIn</Nav.Link> <Nav.Link onClick={signIn} >Resister</Nav.Link></>
		}
	}
	
  return (
	<>
   <Navbar  expand={'lg'} bg="dark" data-bs-theme="dark">
	<Container fluid>
	<Navbar.Brand > <img src={myIcon} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
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
  </>
  );
}

export default NavBarHome;
