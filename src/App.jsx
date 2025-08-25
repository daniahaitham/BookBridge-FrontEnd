import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BookCard from "./components/BookCard.jsx";
import Home from "./pages/Home.jsx";
import Complaints from "./pages/Complaints.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complaints" element={<Complaints />} />    
         
       </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
