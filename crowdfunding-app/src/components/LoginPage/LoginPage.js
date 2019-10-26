import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import NavbarComp from '../NavBar/NavBar'
import './LoginPage.css'
import AuthHelperMethods from '../AuthHelperMethods';

class LoginPage extends Component {
    Auth = new AuthHelperMethods();

    login = (event) => {
        event.preventDefault()

        let form = event.target;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        console.log(`Attempting login with ${email} and ${password}`);
        this.Auth.login(email, password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err)
                alert("Invalid Credentials");
            })

    }

    render() {
        return (
            <div>
                <NavbarComp />
                <div style={{ marginLeft: "35%", marginTop: "10%", marginRight: "35%" }}>
                    <h3> Log In </h3>
                    <Form onSubmit={this.login}>
                        <Form.Group role="form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" name="email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </Form.Group>
                            <Button style={{ marginLeft: "40%" }} variant="primary" type="submit">
                                Login
                            </Button>
                        </Form.Group>
                    </Form>
                    <p style={{ textAlign: "center", marginTop: "5px" }}>
                        Don't have an account? <Link to="/signup">Sign Up </Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage);



