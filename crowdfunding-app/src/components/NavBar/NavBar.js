import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Link, BrowserRouter as Router } from "react-router-dom"
import { Navbar, Nav, Button } from 'react-bootstrap';
import fundit from '../../images/fundit.png'

class NavbarComp extends Component {
    constructor(props) {
        super(props)
    }

    loginArea = () => {
        if (this.props.userName !== undefined) {
            return (
                <div>
                    <p style={{color:"white"}}> Welcome, {this.props.userName}</p>
                </div>
            )
        } else {
            return (
                <div className="login">
                    <Link to="/login"><Button variant="outline-secondary">Login</Button></Link>
                    &nbsp;
                    &nbsp;
                <Link to="/signup"><Button variant="outline-secondary">Sign Up</Button></Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark" sticky="top" >
                    <Navbar.Brand href="/"><img src={fundit} alt="FundIt Logo"
                        style={{ width: 120, height: 37 }}
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Explore</Nav.Link>
                            <Nav.Link href="/">Start a Project</Nav.Link>
                        </Nav>
                        {this.loginArea()}
                        {/* <div className="login">
                            <Link to="/login"><Button variant="outline-secondary">Login</Button></Link>
                            &nbsp;
                            &nbsp;
                            <Link to="/signup"><Button variant="outline-secondary">Sign Up</Button></Link>
                        </div> */}
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
};

export default withRouter(NavbarComp);