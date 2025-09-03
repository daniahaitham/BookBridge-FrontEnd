 
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";  

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();  }

  return (
    <main className="login-page">
      <section className="login-card">
       
        <div className="login-form-side">
          <h1 className="login-title--mobile">Welcome back</h1>
          <h2 className="login-subtitle--mobile">
            Sign in to continue exploring books.
          </h2>

          <form onSubmit={onSubmit} className="login-form">
            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true"> </span>
              <input className="input" name="email"  type="email" placeholder="Email" value={form.email} onChange={onChange} required
              />
            </div>

            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true"> </span>
              <input className="input" name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
            </div>

            <button type="submit" className="btn-login">Log in</button>

            <p className="helper">
              New here? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>

  
        <aside className="login-welcome-side">
          <div className="welcome-copy">
            <h1>Welcome back</h1>
            <p>Sign in to continue exploring books.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Login;
