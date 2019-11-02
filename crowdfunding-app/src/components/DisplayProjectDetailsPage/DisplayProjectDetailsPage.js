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
            projectData: null,
            follows: false,
            hasFunded: false
        }
    }

    async componentDidMount() {
        console.log('back here at display project page')
        if (!this.Auth.loggedIn()) {return}
        let curUser = this.Auth.getTokenData().username;
        const { username, orgName, teamName, projName } = this.props.match.params


        axios.get(`http://localhost:3003/user/${curUser}`)
            .then(response => {
                let data = response.data
                console.log('user data:')
                console.log(data.followed);

                let found = false
                let hasFunded = false
                data.followed.forEach(proj => {
                    if (proj.creator === username
                        && proj.orgname === orgName && proj.teamname === teamName && proj.projname === projName) {
                        found = true
                    }
                })
                data.backed.forEach(proj => {
                    if (proj.creator === username
                        && proj.orgname === orgName && proj.teamname === teamName && proj.projname === projName) {
                        hasFunded = true
                    }
                })
                if (found) {
                    console.log('Setting follows to true');
                    this.setState({
                        follows: found
                    })
                }
                if (hasFunded) {
                    console.log('Setting hasFunded to true');
                    this.setState({
                        hasFunded: hasFunded
                    })
                }
            })

        console.log(`http://localhost:3003/projects/${username}/${orgName}/${teamName}/${projName}`);

        var postData = null
        axios.get(`http://localhost:3003/projects/${username}/${orgName}/${teamName}/${projName}`)
            .then((response) => {
                console.log((response.data));
                let data = response.data;
                let daysToDeadline = this.getDaysToDeadline(data)
                if (daysToDeadline <= 0 && data.status === 'In Progress') {
                    console.log('changing status');
                    if (data.curfunds < data.goal) {
                        data.status = 'Abandoned'
                    } else {
                        data.status = 'Complete'
                    }
                    // set the status
                    postData = {
                        username: username,
                        orgname: orgName,
                        teamname: teamName,
                        projname: projName,
                        status: data.status
                    }
                }
                console.log(data.status);
                this.setState({
                    projectData: data
                })
                if (postData !== null) {
                    return axios.post(`http://localhost:3003/setStatus`, postData)
                }
            })
            .then(response => {
                console.log('status changed');
            })
            .catch(error => {
                alert(error)
            })
    }

    followUnfollowProject = () => {
        let data = this.state.projectData;
        let curUser = this.Auth.getTokenData().username;
        if (this.state.follows) {
            axios.delete(`http://localhost:3003/follow/${curUser}/${data.username}/${data.orgname}/${data.teamname}/${data.projname}`)
                .then(response => {
                    console.log('unfollowed');
                    let curState = this.state.follows
                    this.setState({
                        follows: !curState
                    })
                })
                .catch(error => {
                    console.log('error');
                })
        } else {
            let postData = {
                follower: curUser,
                creator: data.username,
                orgname: data.orgname,
                teamname: data.teamname,
                projname: data.projname
            }
            axios.post('http://localhost:3003/follow', postData)
                .then(response => {
                    console.log('followed');
                    let curState = this.state.follows
                    this.setState({
                        follows: !curState
                    })
                })
                .catch(error => {
                    console.log('error');
                })
        }
    }

    withdrawFunding = () => {
        let data = this.state.projectData;
        let curUser = this.Auth.getTokenData().username;
        let postData = {
            backer: curUser,
            creator: data.username,
            orgname: data.orgname,
            teamname: data.teamname,
            projname: data.projname
        }
        axios.post(`http://localhost:3003/withdraw`, postData)
            .then(response => {
                console.log(response.data);
                console.log(response.data.amount);
                alert(`You have withdrawn S$ ${response.data.amount} from this project`)

                setTimeout(() => {
                    window.location.reload()
                }, 3000)
                
            })
            .catch(error => {
                alert(`Error!`)
            })
    }

    renderFollowButton = (details) => {
        let curUser = this.Auth.getTokenData().username;
        let renderText = "Follow"
        if (this.state.follows) {
            renderText = "Unfollow"
        }
        console.log(curUser);
        console.log(details.username);

        if (curUser === details.username) {
            return null;
        } else {
            return (
                <Button style={{ width: "100%", border: "1px solid black" }} variant="Light" onClick={this.followUnfollowProject}>
                    {renderText}
                </Button>
            )
        }
    }

    renderWithdrawButton = (details) => {
        let curUser = this.Auth.getTokenData().username;
        let renderText = "Withdraw Funding"
        if (!this.state.hasFunded) {
            return null;
        }
        return (
            <Button style={{ width: "100%", marginTop:"2%" }} variant="danger" onClick={this.withdrawFunding}>
                {renderText}
            </Button>
        )
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

    renderBackOrStatus = (details) => {
        console.log(details.status);

        if (details.status === 'In Progress') {
            return (
                <div>
                    <div className="div-stats">
                        <h3 className="generic-h3-stats">{this.getDaysToDeadline(details)} </h3>
                        <p className="generic-p-stats">day{this.getDaysToDeadline(details) > 1 ? 's' : null} to go</p>
                    </div>

                    <Button style={{ width: "100%" }} variant="success" type="submit" onClick={this.redirectToFundPage}>
                        Back this project
                    </Button>
                    {this.renderWithdrawButton(details)}
                </div>
            )
        } else if (details.status === 'Complete') {
            return (
                <div>
                    <h3 className="h3-complete">Project Funding Complete!</h3>
                </div>
            )
        } else {

            return (
                <div>
                    <h3 className="h3-abandoned">Project Funding Abandoned!</h3>
                </div>
            )
        }
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
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
                        <h6>Creator: @{details.username}</h6>
                        &nbsp;
                        &nbsp;
                        <h6>Org: {details.orgname === '$Independent$' ? `Independent` : details.orgname}</h6>
                        &nbsp;
                        &nbsp;
                        <h6>Team: {details.teamname}</h6>
                        &nbsp;
                        &nbsp;
                        <h6>Category: {details.categories}</h6>
                    </div>
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
                                        <p className="generic-p-stats">backer{details.numbackers > 1 ? 's' : null} </p>
                                    </div>
                                    {this.renderBackOrStatus(details)}
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
            console.log('redirecting to login page');
            
            const { username, orgName, teamName, projName } = this.props.match.params
            this.props.history.push({
                pathname: '/login',
                state: { redirectUrl: `/projects/${username}/${orgName}/${teamName}/${projName}` }
            })
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