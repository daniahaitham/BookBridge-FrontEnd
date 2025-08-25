import logo from "../assets/logo.png";
import profileB from "../assets/profileB.png"; 
import backtohome from "../assets/backtohome.png"; 
import { Link} from "react-router-dom";



function Navbar() {

     return (
        <nav className="navbar">  

            <Link to="/" className="back">
                <img src={backtohome} alt="Back to Home" />
            </Link>
            <Link to="/" className="logo">
                <img src={logo} alt="BookBridge logo" />
            </Link>

            <Link to="/Profile" className="profile">
                <img src={profileB} alt="Profile" />
            </Link>
        </nav>
    );
}

export default Navbar;
