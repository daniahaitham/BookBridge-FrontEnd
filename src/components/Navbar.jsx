import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import backIcon from "../assets/backtohome.png";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [open, openMenu] = useState(false);//inisilize to false is needed here 

  function handleLogout() {
     navigate("/login");
    openMenu(false);
  }

  return (
    <nav className="bb-nav">
      
      <button className="bb-back" onClick={() => navigate(-1)} aria-label="Back">
        <img src={backIcon} alt="Back" />
      </button>

      
      <ul className="bb-menu">
        <li><NavLink to="/Profile">Profile</NavLink></li>
        <li className="sep">|</li>
        <li><NavLink to="/Complaints">add Complaint</NavLink></li>
        <li className="sep">|</li>
        <li><NavLink to="/NewBook">Add a book</NavLink></li>
        <li className="sep">|</li>
        <li><NavLink to="/Profile">track requests</NavLink></li>
        <li className="sep">|</li>
        <li><button className="linklike" onClick={handleLogout}>log out</button></li>
      </ul>

       <Link to="/" className="bb-logo" aria-label="Home">
        <img src={logo} alt="BookBridge" />
      </Link>

       <button
        className="bb-hamburger"
        aria-label="Menu"
         aria-controls="bb-mobile-menu"
        onClick={() => openMenu((tempvar) => !tempvar)}//coling and opening the menu
      >

        {/*the humbuger (while we can have it as image also)*/}
        <span />
        <span />
        <span />
      </button>

      
      {open && <div className="bb-dim" onClick={() => openMenu(false)} />}
      <div id="bb-mobile-menu" className={`bb-mobile ${open ? "open" : ""}`}> 
        {/*this is sth needed in the css to chhose which css to chow based on if the state is open or not  */}


         <Link to="/Profile" onClick={() => openMenu(false)}>Profile</Link>
         <Link to="/Complaints" onClick={() => openMenu(false)}>add Complaint</Link>
         <Link to="/NewBook" onClick={() => openMenu(false)}>Add a book</Link>
         <Link to="/Profile" onClick={() => openMenu(false)}>track requests</Link>
        <button className="linklike danger" onClick={handleLogout}>log out</button>
      </div>
    </nav>
  );
}

export default Navbar;
