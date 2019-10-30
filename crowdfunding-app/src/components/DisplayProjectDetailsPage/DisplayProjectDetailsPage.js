import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import AuthHelperMethods from '../AuthHelperMethods';
import NavbarComp from '../NavBar/NavBar'
import books from '../../images/books.jpg'
import './DisplayProjectDetailsPage.css'
var moment = require('moment-timezone');

class DisplayProjectDetailsPage extends Component {
    Auth = new AuthHelperMethods()

    constructor(props) {
        super(props);
        this.state = {
            projectData: null
        }
    }

    componentDidMount() {
        const { username, orgName, teamName, projName } = this.props.match.params
        console.log(`http://localhost:3003/projects/${username}/${orgName}/${teamName}/${projName}`);
        axios.get(`http://localhost:3003/projects/${username}/${orgName}/${teamName}/${projName}`)
            .then((response) => {
                console.log((response.data));
                let data = response.data;
                this.setState({
                    projectData: data
                })
            })
    }

    renderFollowButton = (details) => {
        let curUser = this.Auth.getTokenData().username;
        if (curUser !== details.username) {
            return (
                <Button style={{ width: "100%", border: "1px solid black" }} variant="Light" type="submit">
                    Follow
                </Button>
            )
        } else {
            return null;
        }
    }

    redirectToFundPage = () => {
        const details = this.state.projectData
        details.backerName = this.Auth.getTokenData().name;
        details.backerUsername = this.Auth.getTokenData().username;
        this.props.history.push({
            pathname: `/fund/${details.username}/${details.orgname}/${details.teamname}/${details.projname}`,
            state: { data: details }
        })
    }

    getDaysToDeadline = (details) => {
        let currentDateString = moment().get('year') + "-" + (moment().get('month') + 1) + "-" + moment().get('date');
        let currentDateObj = moment(currentDateString).tz("Asia/Singapore")

        var deadlineObj = moment(details.deadline).tz("Asia/Singapore")
        return moment.duration(deadlineObj.diff(currentDateObj)).asDays();
    }

    renderProjectData = () => {
        if (this.state.projectData == null || Object.keys(this.state.projectData).length == 0) {
            return null;
        }
        let details = this.state.projectData;
        return (
            <div style={{ marginTop: "1%" }}>
                <div style={{ textAlign: "center" }}>
                    <h2>{details.projname}</h2>
                    <h5>{details.description}</h5>
                </div>
                <Container style={{ marginTop: "3%" }}>
                    <Row>
                        <Col >
                            <img
                                src={books}
                                alt="books"
                                style={{ width: 750, height: 450 }}
                            />
                        </Col>
                        <Col>
                            <ProgressBar variant="success" now={(details.curfunds / details.goal) * 100} />
                            <div>
                                <div style={{ marginBottom: "5%" }}>
                                    <div className="div-stats">
                                        <h3 className="curfunds">S$ {details.curfunds} </h3>
                                        <p className="goal">pledged of S$ {details.goal} goal </p>
                                    </div>

                                    <div className="div-stats">
                                        <h3 className="generic-h3-stats">{details.numbackers} </h3>
                                        <p className="generic-p-stats">backers </p>
                                    </div>

                                    <div className="div-stats">
                                        <h3 className="generic-h3-stats">{this.getDaysToDeadline(details)} </h3>
                                        <p className="generic-p-stats">day{this.getDaysToDeadline(details) > 1 ? 's' : null} to go</p>
                                    </div>

                                    <Button style={{ width: "100%" }} variant="success" type="submit" onClick={this.redirectToFundPage}>
                                        Back this project
                                    </Button>
                                </div>

                                {this.renderFollowButton(details)}

                                <div style={{ marginTop: "2%" }}>
                                    <p className="p-fineprint">
                                        All or nothing funding. This project will only be funded if it reaches its goal by {moment(details.deadline).format("dddd, MMMM Do YYYY")} 0000 hrs SGT.
                                    </p>
                                </div>
                            </div>


                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }

    render() {
        if (!this.Auth.loggedIn()) {
            this.props.history.replace('/login')
        }
        return (
            <div>
                <NavbarComp />
                {this.renderProjectData()}
            </div>

        )
    }
}

export default withRouter(DisplayProjectDetailsPage)