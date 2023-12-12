
import './App.css'
import Home from './componet/Home'
import { SideNavbar } from './componet/SideNavbar'

function App() {
  // <ErrorExample/>

  return (
    <>
    
   <div className=" d-flex flex-row">
   <div><SideNavbar/></div>
    <div className='container-fluid mx-4 my-3'><Home/></div>
   </div>
   
    </>
  )
}

export default App
