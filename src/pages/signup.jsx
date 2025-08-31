import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [form,setForm] = useState({ //i use the useState to create the state and setter 

        //form is an obj to hold values , can be accessed to change values using setForm 
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    })

    //per input..
    function onChange(e) {//on change whenever its called its updating the state with the needed values. 
    setForm({ ...form, [e.target.name]: e.target.value });//name is the field name 
    }

    //for the form submission
    function onSubmit(e){ //it will know the values becouse of the current state of the form 
        e.preventDefault();//prevent refreshing when submitting
      console.log("SUBMITted ");
        //later from here i will send data to backend
        if (!form.name || !form.email || !form.password) {
            alert("Please fill required fields");
            return;
        }
        navigate("/login");


  }



  return (
    <>

        <div>
            <h1>Hello!</h1>
            <h2>Create your account to start exploring books.</h2>
        </div>

        <div>
        {/*event propos sxpect a function ive just crated , will ba called when event happn*/}
      <form onSubmit={onSubmit}> {/*this will be triggred when clicking the button only */}
        
        <input name="name" placeholder="Name" value={form.name} onChange={onChange} />
                {/*name is being used by the onChange fun in react to know what input is changing - updating multi field once. */}
                {/*value is needed to link the input to the states */}
                {/*calling onChange  means : when this input chaneges , call the onchange*/}
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={onChange} />
        <input name="phone" placeholder="Phone" type="tel" value={form.phone} onChange={onChange} />
        <button type="submit">Signup</button>
      </form>
      </div>

    </>

    
  );
}

export default Signup;
