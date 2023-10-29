import React from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import NoPages from './pages/NoPages'
import SpecificBook from './Component/Special'
import Register from './pages/Register'
import Home from './pages/Home'
import UserHome from './pages/UserHome'

import AddBook from './pages/AddPage'
import Request from './pages/SendRequest'

import EditBook  from './pages/EditPage'
import AllUser  from './pages/AllUser'
import AllTeacher  from './pages/AllTeacher'
import AllRequest  from './pages/AllRequest'











const App = () => {
	return (
		<div>
			
			<BrowserRouter>
       <Routes>
				<Route path="/" element={<UserHome active="home" />} />
				<Route path="/home" element={<Home active="home"/>} />

				<Route path="/login" element={<Login/>} />
				<Route path="/signin" element={<Register/>} />
				
				<Route path="/view/:id" element={<SpecificBook active="home"/>} />
				<Route path="/updatebook/:id" element={<EditBook active="home"/>} />
				<Route path="/alluser" element={<AllUser active="alluser"/>} />
				<Route path="/allteacher" element={<AllTeacher active="allteacher"/>} />
				<Route path="/allrequest" element={<AllRequest active="allrequest"/>} />

				<Route path="/addbook" element={<AddBook active="addbook"/>} />
				<Route path="/request" element={<Request active='request'/>} />

        <Route path="*" element={<NoPages/>}/>
        </Routes>
			</BrowserRouter>
			

      
		</div>
	)
}

export default App
