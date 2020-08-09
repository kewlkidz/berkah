import React, { useState } from "react";

const ContactForm = (props) => {

  const [forms, setForms] = useState({ nama: "", email: "", phone: "", pesan: "" });
 
  const handleChanges = (event) => {

    const newStateObj = { ...forms, [event.target.name]: event.target.value };
    setForms(newStateObj);
  };

  const submitForm = (event) => {
    event.preventDefault(); 
    setForms({ nama: "", email: "", phone: "", pesan: "" }); 
  };

  console.log("here are the forms", forms);

  return (
    <form onSubmit={submitForm}>
  
      <label htmlFor="name">Nama</label>
      <input
        id="name"
        type="text"
        placeholder="Name lengkap"
        name="name"
        value={forms.name}
        onChange={handleChanges}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="Alamat email"
        name="email"
        value={forms.email}
        onChange={handleChanges}
      />

       <label htmlFor="phone">Phone no.</label>
       <input
        id="phone"
        placeholder="Nomor telpon"
        name="phone"
        value={forms.phone}
        onChange={handleChanges}
      />

       <label htmlFor="message">Pesan</label>
       <input
        id="message"
        placeholder="Tulis pertanyaan dan masukan Anda disini"
        name="message"
        value={forms.message}
        onChange={handleChanges}
      />

      <button type="submit">Kirim</button>

    </form>
  );
};

export default Form;
