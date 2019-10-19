import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import NavbarComp from '../NavBar/NavBar'
import './LoginPage.css'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <NavbarComp />
                <div style={{ marginLeft: "35%", marginTop: "10%", marginRight: "35%" }}>
                    <h3> Log In </h3>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button style={{ width: "100%" }} variant="primary" type="submit">
                            Log In
                                    </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage);



