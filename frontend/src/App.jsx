import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Profile from "./pages/MyProfile.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Lawyers from "./pages/Lawyers.jsx"
import Login from "./pages/Login.jsx"
import Appointments from "./pages/Appointments.jsx"
import MyAppointment from "./pages/MyAppointment.jsx"
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
    return (
        <div className='mx-4 sm:mx-[10%]'>
            <Navbar/>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/lawyers" element ={<Lawyers />} />
                <Route path="/lawyers/:speciality" element ={<Lawyers />} />
                <Route path="/login" element ={<Login />} />
                <Route path="/contact" element ={<Contact />} />
                <Route path="/about" element ={<About />} />
                <Route path="/my-profile" element ={<Profile />} />
                <Route path="/my-appointment" element ={<MyAppointment />} />
                <Route path="/appointment/:lawId" element ={<Appointments />} />
            </Routes>
            <Footer/>
        </div>
    )
}
export default App
