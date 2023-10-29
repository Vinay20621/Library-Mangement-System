import NavBar from '../Component/NavBar'
import Casoul from '../Component/Casoul'
import Footer from '../Component/Footer'
import BookGroup from '../Component/BookGroup'




function Home({active})
{
   
   
    return (
        <>
        <NavBar active={active} />
        <Casoul/>
        <BookGroup />
        <Footer/>
        </>
    )
}
export default Home;