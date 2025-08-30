import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import AboutUs from './AboutUs.jsx';


function LandingPage() {
    return (
        <div>
            <section>
                <h1>Discover, Exchange, and Share Books with the Community.</h1>
                <p>Join a platform where readers connect — sell, borrow, or trade your
          favorite books anytime.</p>
            

            <div>
              <Link to="/Signup">Sign Up</Link> 
               <Link to="/Login">Log In</Link> 
              <Link to="/AboutUs">About Us | Contact Us</Link>
            </div>
            </section>
        </div>
    );
}

export default LandingPage;
