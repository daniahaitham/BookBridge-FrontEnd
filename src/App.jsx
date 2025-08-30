import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";
import Complaints from "./pages/Complaints.jsx";
import SpesificBook from "./pages/SpesificBook.jsx";
import BookCard from "./components/BookCard.jsx";


function App() {
  return (
    <BrowserRouter>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/SpesificBook" element={<SpesificBook />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}
export default App;
