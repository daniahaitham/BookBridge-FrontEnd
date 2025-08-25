import React from 'react';

function LandingPage() {
    return (
        <div>
            <section>
                <h1>Discover, Exchange, and Share Books with the Community.</h1>
                <p>Join a platform where readers connect — sell, borrow, or trade your
          favorite books anytime.</p>
            

            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
                <Link to="/AboutUs">About Us | Contact Us</Link>
            </div>
            </section>
        </div>
    );
}

export default LandingPage;