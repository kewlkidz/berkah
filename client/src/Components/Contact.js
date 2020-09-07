import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';


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
        email: yup.string().required("Email address is required"),
        subject: yup.string().required("Subject is required"),
        message: yup.string().required("Message is required"),

    })

    //Creating validations using Yup
    const validateChange = (e) => {

        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.name === e.target.value)
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

        <div>
            <h1>Contact Us</h1>

        <Form onSubmit = {formSubmit} >
            {serverError ? <p>{serverError}</p> : null}

            <FormGroup>
            <Label htmlFor="name">
                Full Name*
                <Input
                    id = "name"
                    type = "text"
                    name = "name"
                    data-cy = "name"
                    placeholder = "Your full name goes here"
                    value = {form.name}
                    onChange = {inputChange}
                    />
                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor="email">
                Email*
                <Input 
                    id = "email"
                    type = "email"
                    name = "email"
                    data-cy = "email"
                    placeholder = "Your email address goes here"
                    value = {form.email}
                    onChange = {inputChange}
                    />
                {errors.email.length > 0 ? <p>{errors.email}</p> : null}
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor = "subject">
                Subject*
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
                Message*
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
        <h6>* required</h6>
        </div>
      
    );
}


export default Contact;
