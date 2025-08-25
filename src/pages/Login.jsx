import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [form, setForm] = useState({
    email: "",
    password: ""
  });

   function onChange(e) {
    setForm({...form,[e.target.name]: e.target.value});
  }

    function onSubmit(e) {
    e.preventDefault();
  }

   return (
    <>
    <div>
      <h1>Welcome back </h1>
      <h2>Sign in to continue exploring books.</h2>
    </div>

     <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
        <button type="submit">Login</button>
      </form>
     </div>
     </>
  );
}

export default Login;