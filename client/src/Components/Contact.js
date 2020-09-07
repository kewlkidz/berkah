import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';
import styled from 'styled-components';
import "../App.css";


const FormContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
// margin:20px 0;
width: 80vw;
	margin: 20px auto;
-webkit-box-shadow: -5px 3px 21px 11px #0077be;
		-moz-box-shadow: -5px 3px 21px 11px #0077be;
		box-shadow: -5px 3px 21px 11px #0077be;

Input,TextArea{
    margin:5px 0;
    background-color:yellow;
}

`

const Contact = (props) => {

    //Creating a state variable for DRYer code.
    const emptyData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }

    //Creating initial state for forms. 
    const [form, setForm] = useState(emptyData)

    //Creating initial state for errors. Uses String to state errors.
    const [errors, setErrors] = useState(emptyData)

    //Creating temporary state to display API POST response on the DOM.
    const [post, setPost] = useState([])

    //Creating state for server error. Uses String.
    const [serverError, setServerError] = useState("")

    //Creating button state to disable if input does not meet requirements/is not validated
    const [button, setButton] = useState(true);


    //Creating form schema using Yup
    const formSchema = yup.object().shape({

        name: yup.string().required("Full name is required"),
        email: yup.string().email("Must be a valid email").required("Email address is required"),
        subject: yup.string(),
        message: yup.string(),

    })

    //Creating validations using Yup
    const validateChange = (e) => {

        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.name ? e.target.value : null)
        .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: ""
            })
            
        })
        .catch(err => {
            console.log(err)
            setErrors({
                ...errors,
                [e.target.name] : err.errors[0]
            })
        })
    }

    //Creating POST request using Axios when form is submitted using formSubmit function
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!")

        const { name, email, subject, message } = form;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Kewl Kidz",
            subject: subject,
            message_html: message,
          };

        emailjs.send(
            'gmail',
            'template_W1qKJSrF',
            templateParams,
            'user_XbmzNDa2SmBJm9efz9Gw9'
        )

        alert("Your form has been submitted!")

        // axios
        //     .post("/api/form", form)
        //     .then(response => {
        //         console.log("POST is successful!", response.data)
        //         setPost(response.data)
        //         setServerError(null)
        //         setForm(emptyData)
        //     })
        //     .catch(err => {
        //         setServerError("API POST request failed!")
        //     })
        // props.addNewUser(form); 
    }

    //Creating onChange function to hook up state with new input 
    const inputChange = (e) => {
        e.persist()
        console.log("new input here!", e.target.value)
        const newData = {
            ...form,
            [e.target.name] : e.target.value
        }
        validateChange(e)
        setForm(newData)
    }

    //If everything checks, then button is enabled
    useEffect(() => {
        formSchema.isValid(form)
        .then(isValid => {
            setButton(!isValid)
        })
    }, [form])

    return (

        <FormContainer>
            <h1>Contact Us</h1>

        <Form onSubmit = {formSubmit} >
            {serverError ? <p>{serverError}</p> : null}

            <FormGroup>
            <Label htmlFor="name">
                <p>Full Name* </p>
                <Input
                    id = "name"
                    type = "text"
                    name = "name"
                    data-cy = "name"
                    placeholder = "Your full name"
                    value = {form.name}
                    onChange = {inputChange}
                    />
                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
            </Label>
            </FormGroup>

            <FormGroup className="emailLabel">
            <Label htmlFor="email">
               <p> Email* </p>
                <Input 
                    id = "email"
                    type = "email"
                    name = "email"
                    data-cy = "email"
                    placeholder = "test@gmail.com"
                    value = {form.email}
                    onChange = {inputChange}
                    />
                {errors.email.length > 0 ? <p>{errors.email}</p> : null}
            </Label>
            </FormGroup>

            <FormGroup className="subjectLabel">
            <Label htmlFor = "subject" >
               <p> Subject </p>
                <Input
                    id = "subject"
                    type = "subject"
                    name = "subject"
                    data-cy = "subject"
                    placeholder = "Your Subject"
                    value = {form.subject}
                    onChange = {inputChange}
                    />
                {errors.subject.length > 0 ? <p>{errors.subject}</p> : null}

            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor = "message">
               <p> Message</p>
                <textarea
                    id = "message"
                    type = "message"
                    name = "message"
                    data-cy = "message"
                    placeholder = "Your Message"
                    value = {form.message}
                    onChange = {inputChange}
                    />
                {errors.message.length > 0 ? <p>{errors.message}</p> : null}

            </Label>
            </FormGroup>

         


            <Button type = "submit" data-cy = "submit" disabled = {button}>
                Submit
            </Button>

            {/* To display POST data on the DOM */}
            {/* <pre>{JSON.stringify(post, null, 2)}</pre>  */}

        </Form>
        <h5>* required</h5>
        </FormContainer>
      
    );
}


export default Contact;
