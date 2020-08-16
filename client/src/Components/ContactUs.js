import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import * as yup from 'yup';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const ContactUs = () => {

    //Creating a state variable for DRYer code.
    const emptyData = {
        name: "",
        email: "",
        message: "",
    }

    //Creating initial state for forms. 
    const [form, setForm] = useState(emptyData)

    //Creating POST request using Axios when form is submitted using formSubmit function
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/form', form)
    }

    //Creating onChange function to hook up state with new input 
    const inputChange = (e) => {
        e.persist()
        console.log("new input here!", e.target.value)
        const newData = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(newData)
    }


    return (

        <Form onSubmit = {formSubmit} style={{width:'600px'}}>

            <FormGroup>
            <Label htmlFor="name">
                Full Name
                <Input
                    id = "name"
                    type = "text"
                    name = "name"
                    placeholder = "Your full name goes here"
                    value = {form.name}
                    onChange = {inputChange}
                    />
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor="email">
                Email
                <Input 
                    id = "email"
                    type = "email"
                    name = "email"
                    placeholder = "Your email address goes here"
                    value = {form.email}
                    onChange = {inputChange}
                    />
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor = "message">
                Subject
                <Input
                    id = "message"
                    type = "textarea"
                    name = "message"
                    placeholder = "Your Message"
                    value = {form.message}
                    onChange = {inputChange}
                    />

            </Label>
            </FormGroup>

            <Button type = "submit" >
                Submit
            </Button>

        </Form>

    );
}


export default ContactUs;