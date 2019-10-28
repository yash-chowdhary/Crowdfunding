import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Navbar, Nav, Carousel, Form, FormControl, Button } from 'react-bootstrap';
import AuthHelperMethods from '../AuthHelperMethods';
import NavbarComp from '../NavBar/NavBar'

class ProjectDetailsPage extends Component {
    Auth = new AuthHelperMethods()

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarComp />
                <p>{this.props.location.state.data.title}</p>
            </div>
            
        )
    }
}

export default withRouter(ProjectDetailsPage)