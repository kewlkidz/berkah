import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = (props) => {

  const [forms, setForms] = useState({ nama: "", email: "", phone: "", pesan: "" });

 const onNameChange = (event) => {
	setForms({nama: event.target.value})
  }

  const onEmailChange = (event) => {
	setForms({email: event.target.value})
  }

  const onPhoneChange = (event) => {
	setForms({phone: event.target.value})
  }

  const onMessageChange = (event) => {
	setForms({pesan: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data:  forms
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }

  console.log("here are the forms", forms);

  const resetForm = (event) => {
    
    setForms({nama: "", email: "", phone: "", pesan: ""})
 }

  return (

    <div> 

    <form id="contact-form" onSubmit={handleSubmit} method="POST">

    <div className="form-group">
  
      <label htmlFor="name">Nama</label>
      <input
        id="name"
        type="text"
        className="form-control" 
        placeholder="Name lengkap"
        name="nama"
        value={forms.nama}
        onChange={onNameChange}
      />

      </div>

      <div className="form-group">

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type= "email"
        aria-describedby="emailHelp"
        className="form-control" 
        placeholder="Alamat email"
        name="email"
        value={forms.email}
        onChange={onEmailChange}
      />

      </div>

      <div className="form-group">

       <label htmlFor="phone">Phone no.</label>
       <input
        id="phone"
        type="tel"
        className="form-control" 
        placeholder="Nomor telpon"
        name="phone"
        value={forms.phone}
        onChange={onPhoneChange}
      />

      </div>

      <div className="form-group">

       <label htmlFor="message">Pesan</label>
       <textarea
        id="message"
        rows="5" 
        className="form-control" 
        placeholder="Tulis pertanyaan dan masukan Anda disini"
        name="pesan"
        value={forms.pesan}
        onChange={onMessageChange}
      />

      </div>

      <button type="submit" className="btn btn-primary">Kirim</button>

    </form>
    </div>

  );
};

export default ContactForm;
