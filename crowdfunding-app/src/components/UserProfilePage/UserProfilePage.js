import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import AuthHelperMethods from '../AuthHelperMethods';
import NavbarComp from '../NavBar/NavBar'

class UserProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            data: null
        }
    }

    componentDidMount() {
        console.log('mounted');
        const { username } = this.props.match.params

        axios.get(`https://crowdfunding-2102.herokuapp.com/api/v1/user/${username}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })

    }

    renderProjects = (data, type) => {
        if (data !== null) {
            if (data[type].length === 0) {
                return (
                    <div style={{ textAlign: "center", marginTop: "2%" }}>
                        <h5>
                            {`This user hasn't ${type} any projects.`}
                        </h5>
                    </div>
                )
            }
            return (
                <div style={{ marginTop: "2%" }}>
                    <ol>
                        {
                            data[type].map((proj, index) => {
                                return <li key={index}>
                                    <Link to={`/projects/${proj.creator}/${proj.orgname}/${proj.teamname}/${proj.projname}`} >
                                        {proj.projname}
                                    </Link>
                                </li>
                            })
                        }
                    </ol>
                </div>
            )
        }
    }

    render() {
        let data = this.state.data;
        {
            return data === null ? null :
                (
                    <div>
                        <NavbarComp />
                        <div style={{ marginTop: "2%", display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                            <div style={{ display: 'inline-block' }}>
                                <h2>{data.name}</h2>
                            </div>
                            <div style={{ display: 'inline-block' }}>
                                <p>@{data.username}</p>
                            </div>
                        </div>
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col xs={7}>
                                    <div style={{ alignContent: "center" }}>
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                            <Tab eventKey="created" title="Created">
                                                {/* <div style ={{textAlign: "center"}}><h4>Hi</h4></div> */}
                                                {this.renderProjects(data, 'created')}
                                            </Tab>
                                            <Tab eventKey="backed" title="Backed">
                                                {this.renderProjects(data, 'backed')}
                                            </Tab>
                                            <Tab eventKey="following" title="Following">
                                                {this.renderProjects(data, 'followed')}
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>

                    </div>
                )
        }
    }
}

export default withRouter(UserProfilePage)