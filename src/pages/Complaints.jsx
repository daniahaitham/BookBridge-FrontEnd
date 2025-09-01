import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Complaints.css";


function Complaints() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        subject: "",
        description: "",
        priority: "low"
    });

    //handle the submission error
    function onSubmit(e) {
        e.preventDefault();
        if (!form.subject || !form.description) {
            alert("Please fill required fields");
            return;
        }

          navigate("/Home");




    }

        function onChange(e) {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value });
        }


    return (

        <section>
            <h1>Complaints</h1>
            <p>
                Please fill the form below to submit your complaint. Our team will review it
        and get back to you as soon as possible.
            </p>

            <form onSubmit={onSubmit}>
               
                    <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                    <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>

                    <select name="priority" value={form.priority} onChange={onChange}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                    <button type="submit">SUBMIT</button>
            </form>
        </section>
    );
}

export default Complaints;