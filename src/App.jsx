import Navbar from './reactComponents/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Members from './pages/Members.jsx'
import Positions from './pages/Positions.jsx'
import Events from './pages/Events.jsx'
import PastEvents from './pages/PastEvents.jsx'
function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/about' element={< About/>}/>
        <Route path='/members' element={< Members/>}/>
        <Route path='/events' element={< Events/>}/>
        <Route path='/pastevents' element={< PastEvents/>}/>
        <Route path='/positions' element={< Positions/>}/>
      </Routes>
    </Router>
    </>
  )
}


export default App
