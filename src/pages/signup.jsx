import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED");

    if (!form.name || !form.email || !form.password) {
      alert("Please fill required fields");
      return;
    }
    navigate("/login");
  }

  return (
    <main>
      <section>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={onChange}
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
              />
            </div>

            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={onChange}
              />
            </div>

            <div>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={onChange}
              />
            </div>

            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={onChange}
              />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>

        <aside>
          <div>
            <h1>Hello!</h1>
            <p>Create your account to start exploring books.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Signup;
