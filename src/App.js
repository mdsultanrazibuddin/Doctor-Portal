
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route,} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Review from './Pages/Review/Reviews';
import Appointment from './Pages/Appointment/Appointment'
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';


function App() {
  return (
    <div className='px-12'>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
       
        <Route path="/appointment" element=
        {
          <RequireAuth>
            <Appointment/>
          </RequireAuth>

        }
         />
        <Route path="/review" element={<Review/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
