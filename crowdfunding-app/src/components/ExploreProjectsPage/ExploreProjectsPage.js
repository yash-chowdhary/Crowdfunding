import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import AuthHelperMethods from '../AuthHelperMethods';
import NavbarComp from '../NavBar/NavBar'

class ExploreProjectsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectData: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3003/allProjects')
            .then(response => {
                console.log(response.data);
                this.setState({
                    projectData: response.data
                })
            })
            .catch(error => {
                alert(error)
            })
    }

    renderProjectList = (details) => {
        if (details.length === 0) {
            var link = <a href="/start">here</a>;
            return (
                <div style={{display:'flex', marginTop: "5%", justifyContent: 'center', alignContent: "center"}}>
                    <h3>There are no projects to see. Click {link} to start a new project!</h3> 
                </div>
            )
        }
        return (
            <div style={{ marginTop: "3%" }}>
                <div style={{marginLeft:"1.85%"}}>
                    <h3>Projects: </h3>
                </div>
                <ol>
                    {
                        details.map((proj, index) => {
                            return <li key={index}>
                                <div>
                                    <Link to={`/projects/${proj.username}/${proj.orgname}/${proj.teamname}/${proj.projname}`} >
                                        {proj.projname}
                                    </Link>
                                    <h6>{proj.description}</h6>
                                    <h6>Creator: {proj.username} </h6>
                                    <h6>Org: {proj.orgname === '$Independent$'? 'Independent': proj.orgname} </h6>
                                    <h6>Category: {proj.categories}</h6>
                                </div>
                            </li>
                        })
                    }
                </ol>
            </div>
        )
    }

    render() {
        let details = this.state.projectData
        return (
            <div>
                <NavbarComp />
                {this.renderProjectList(details)}
            </div>
        )
    }
}

export default withRouter(ExploreProjectsPage)