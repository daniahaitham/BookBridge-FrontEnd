import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NewBook.css";

function NewBook() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    exchangeType: "sell", 
    priceOrDuration: "",
    availability: true,
    cover: null,
  });

 function onChange(e) { /*HERE!! */
    /* 
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else if (type === "file") {
      setForm((f) => ({ ...f, cover: files?.[0] || null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
      */
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.author || !form.exchangeType) {
      alert("Please fill Title, Author, and Exchange Type.");
      return;
    }
    navigate("/profile"); 
  }

   

  return (
    <main className="ab-page">
      <h1 className="ab-title">Provide new book</h1>
      <p className="ab-sub">
        Please fill the form below to offer your book to other users!
      </p>

      <section className="ab-card">
        <form className="ab-form" onSubmit={onSubmit}>
          <input className="ab-input"  name="title"  placeholder="Title"  value={form.title}  onChange={onChange} />

          <input className="ab-input"  name="author"  placeholder="Author"  value={form.author}  onChange={onChange} />

          <textarea  className="ab-input ab-textarea" name="description"  placeholder="Description"  value={form.description}  onChange={onChange} rows={3} />

          <select  className="ab-input"  name="exchangeType"  value={form.exchangeType} onChange={onChange}>
            <option value="sell">Sell</option>
            <option value="borrow">Borrow</option>
            <option value="exchange">Exchange</option>
          </select>

          <input className="ab-input"   name="priceOrDuration" value={form.priceOrDuration} onChange={onChange} />

          <label className="ab-field">
                <span className="ab-label">Availability</span>
                <select className="ab-input"  name="availability"  value={form.availability ? "true" : "false"}   onChange={(e) =>//here !!
                    setForm((f) => ({ ...f, availability: e.target.value === "true" }))//KEEPS EVEYTHING JUST CNAGE AVAILABILITY IN THE STATE 
                }>{/*Compare the "true" to what is selected and assign it to availability */}


                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                </select>
        </label>

          <label className="ab-file">
            <input type="file" accept="image/*" onChange={onChange} />{/*here!! */}
           </label>

          <button type="submit" className="ab-done">DONE</button>
        </form>
      </section>
    </main>
  );
}

export default NewBook;
