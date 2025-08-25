import React from "react";

function Complaints() {
    return (
        <section>
            <h1>Complaints</h1>
            <p>
                Please fill the form below to submit your complaint. Our team will review it
        and get back to you as soon as possible.
            </p>

            <form>
                <div>
                    <input type="text" placeholder="Subject / Title" />
                </div>
                
                <div>
                     <textarea placeholder="Description"></textarea>
                </div>

                <div>
                    <select>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                </div>

                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </section>
    );
}
