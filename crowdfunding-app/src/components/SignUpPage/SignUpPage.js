import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom'
import { Form, Button, Container, Row, Toast, FormGroup } from "react-bootstrap"
import NavbarComp from '../NavBar/NavBar'
import { Redirect } from 'react-router'

class SignUpPage extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            
            data: undefined,
            show: false
        }
    }

    setShow = (showState) => {
        this.setState({
            show: showState
        })
    }

    dummy = () => {
        console.log("test")
    }

    createUser = (event) => {
        event.preventDefault();
        
        let form = event.target;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        var self = this;
        const data = {
            'name': name,
            'email': email,
            'password': password
        }

        console.log(data)
        axios.post('http://localhost:3003/signup', data)
            .then((response) => {
                this.props.history.push("/login")

            })
            .catch(error => {
                console.log(error)
                alert("User with the same email already exists!")
            });
    }

    render() {
        return (
            <div>
                <NavbarComp />
                <div style={{ marginLeft: "35%", marginTop: "10%", marginRight: "35%" }}>
                    <h3> Sign Up </h3>
                    <Form onSubmit={this.createUser}>
                        <FormGroup role="form">
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="name" placeholder="Name" name="name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" name="email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </Form.Group>
                            <Button style={{ marginLeft:"40%",  }} variant="primary" type="submit">
                                Sign Up
                         </Button>
                        </FormGroup>
                    </Form>
                    <p style={{ textAlign: "center", marginTop: "5px" }}>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                    <Toast onClose={() => this.setShow(false)} show={this.state.show} delay={3000} autohide>
                        <Toast.Body>Unable to sign up! {this.state.errorMessage}</Toast.Body>
                    </Toast>
                </div>
            </div>
        )
    }
}



export default withRouter(SignUpPage);



