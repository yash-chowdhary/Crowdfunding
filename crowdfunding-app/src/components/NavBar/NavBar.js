import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Link, BrowserRouter as Router } from "react-router-dom"
import { Navbar, Nav, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import fundit from '../../images/fundit.png'
import AuthHelperMethods from '../AuthHelperMethods';

class NavbarComp extends Component {

    constructor(props) {
        super(props)
        this.Auth = new AuthHelperMethods();
        this.token = this.Auth.getToken()
        
    }

    logout = () => {
        this.Auth.logout();
        window.location.reload();
    }

    redirectToProfile = () => {
        const userDetails = this.Auth.getTokenData()
        this.props.history.push({
            pathname: `/profile/${userDetails.username}`
        })
    }

    loginArea = () => {
        if (this.token === null) {
            return (
                <div className="login">
                    <Link to="/login"><Button variant="outline-secondary">Login</Button></Link>
                    &nbsp;
                    &nbsp;
                <Link to="/signup"><Button variant="outline-secondary">Sign Up</Button></Link>
                </div>
            )
        } else {
            let tokenData = this.Auth.getTokenData();

            console.log(tokenData)
            return (
                <DropdownButton id="dropdown-basic-button" title={tokenData.name} variant="secondary" >
                    <Dropdown.Item onClick={this.redirectToProfile}>Profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.logout}>
                        <p style={{ color: "red", marginBottom: "0px" }}>Logout</p>
                    </Dropdown.Item>
                </DropdownButton >
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
                            <Nav.Link href="/explore">Explore</Nav.Link>
                            <Nav.Link href="/start">Start a Project</Nav.Link>
                        </Nav>
                        {this.loginArea()}
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
};

export default withRouter(NavbarComp);