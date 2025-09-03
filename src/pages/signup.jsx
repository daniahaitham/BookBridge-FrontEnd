import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({

    //giving initial value for the brobarties 
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });


  //HERE ! why it differ than the one in the login
  function onChange(e) {
  const { name, value } = e.target;
  setForm(prev => ({
    ...prev,
    [name]: value
  }));
}


  function onSubmit(e) {
    e.preventDefault();
 
    if (!form.name || !form.email || !form.password) {
      alert("Please fill required fields");
      return;
    }
    navigate("/login");
  }

  return (
    <main>
      
      <section>
         <div className="content">
            <h1>Hello!</h1>
            <p>Create your account to start exploring books.</p>
          </div>
        <div>
          <form onSubmit={onSubmit}>
            <div> {/*value tells that whatever is in the form.name object should be the displayed*/}
              <input name="name" placeholder="Name" value={form.name} onChange={onChange} />
            </div>

            <div>
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} />
            </div>

            <div>
              <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
            </div>

            <div>
              <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={onChange} />
            </div>

            <div>
              <input name="phone" type="tel" placeholder="Phone number" value={form.phone} onChange={onChange} />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>

        
         
       
      </section>
    </main>
  );
}

export default Signup;
