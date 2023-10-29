import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";
import NavBar from '../Component/NavBar'
import {useLocation} from 'react-router-dom'
const serverUrls='https://bakend-api-qg2w.onrender.com'
function EditPage()
{
 
    const [book,setBook]=useState({title:'',author:"",body:"",coverImg:''})
    const {id}=useParams();
   
    const navigate=useNavigate()
    const location=useLocation()

    const notifySuccess = (message) => toast.success(message);
    
    const notify = (message) => toast.error(message);
    async function Check()
  {
    try {
      
      const res=await axios.get(serverUrls+'/book/mybook/'+id,{
        headers: {
          'token': localStorage.getItem('token'),
        },
      })
            if(res.data.status!=='ok')
            {
              return navigate('/home',{
                state:{
                  user:location.state.user,
                  active:"home"
                },
              })
               
            }
            return setBook(res.data.data);
      
            }
      
     catch (error) {
      console.log(error)
    }
    
  }
    
        
       
    
  
    function handleFeild(e)
        {
            const name=e.target.name;
		    const value=e.target.value;

            setBook({...book,[name]:value})
        }
   
        
        async function Summit(event)
        {
            event.preventDefault()
           
          
            try {
                if(!book.title|| !book.author || !book.body || !book.coverImg)
                {
                    notify("Input feild is required")
                    return navigate('/addbook',{
                      state:{
                        user:location.state.user,
                        active:"addBook"
                      },
                    })
                    
                }	
                const res=await axios.post(serverUrls+'/book/updatebook/'+id,book,{
                  headers: {
                    'token': localStorage.getItem('token'),
                  },
                })              
                
               
                
                if(res.data.status==='error')
                {
                    return notify(res.data.message)
                   
                }
                
                notifySuccess("Success ! Book has added")
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
    
        useEffect(()=>
        {
          Check()
        
        },[])
    return (
        <>
<NavBar active="home"/>
 <div className="container mt-3 form ">

 <ToastContainer />
      <form onSubmit={Summit}  className="mt-5 pt-3 pb-3">
        
      <div className="mb-3">
          <label  className="form-label">Cover Url</label>
          <input
            type="text"
            className="form-control"
          
          value={book.coverImg}          
          onChange={handleFeild}
            name="coverImg"
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
          value={book.title}          
          onChange={handleFeild}
            name="title"
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={book.author}
            onChange={handleFeild}
            name="author"
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label >Body</label>
          <textarea name="body" className="form-control"  value={book.body}  onChange={handleFeild}
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
 export default EditPage;