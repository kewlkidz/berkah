import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = (props) => {

  const [forms, setForms] = useState({ nama: "", email: "", phone: "", pesan: "" });
 
//   const handleChanges = (event) => {

//     const newStateObj = { ...forms, [event.target.name]: event.target.value };
//     setForms(newStateObj);
//   };

//   const submitForm = (event) => {
//     event.preventDefault(); 
//     setForms({ nama: "", email: "", phone: "", pesan: "" }); 
//   };

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

  };

  console.log("here are the forms", forms);

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

// <div className="App">
//    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//     <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//     </div>
//     <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Email address</label>
//         <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//     </div>
//     <div className="form-group">
//         <label htmlFor="message">Message</label>
//         <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//     </div>

// onNameChange(event) {
// 	this.setState({name: event.target.value})
//   }

//   onEmailChange(event) {
// 	this.setState({email: event.target.value})
//   }

//   onMessageChange(event) {
// 	this.setState({message: event.target.value})
//   }

// handleSubmit(event) {
// }
// }