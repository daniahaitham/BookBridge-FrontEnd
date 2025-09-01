import { Link ,useNavigate} from "react-router-dom";
import logo from "../assets/logo.png";
import backIcon from "../assets/backtohome.png";
import profileIcon from "../assets/profileB.png";
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();
   return (
    <nav>
      <button onClick={() => navigate(-1)} >
        <img src={backIcon} alt="Back" />
      </button>


      <Link to="/" className="navbar-logo">
        <img src={logo} alt="BookBridge Logo" />
      </Link>

       
      <Link to="/profile"  aria-label="Profile">
        <img src={profileIcon} alt="Profile" />
      </Link>
    </nav>
  );
}
export default Navbar;
