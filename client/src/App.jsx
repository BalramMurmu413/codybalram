
import './App.css'
import { Routes, Route } from "react-router-dom";
// Pages
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Contact from './Pages/Contact.jsx'
import Chat from './Pages/Chat.jsx'
import CreateProfile from './Pages/CreateProfile.jsx'
import Logout from './Components/HomePage.jsx'
import MaintanancePage from './Pages/MaintanancePage.jsx';
import HireMe from './Pages/HireMe.jsx';
import ClientPage from './Pages/ClientPage.jsx';
import OurWork from './Pages/OurWork.jsx';
import Course from './Pages/Course.jsx';


function App() {
  return (
            <>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course" element={<Course/>} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/client" element={<ClientPage/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/maintanancePage" element={<MaintanancePage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/hireme" element={<HireMe />} />
            <Route path="/ourwork" element={<OurWork />} />

          </Routes>
    </>
  )
}

export default App
