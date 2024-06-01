
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
function App() {

  return (
    <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </>
  )
}

export default App
