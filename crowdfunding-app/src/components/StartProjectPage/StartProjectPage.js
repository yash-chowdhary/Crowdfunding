import React, { Component , useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import NavbarComp from '../NavBar/NavBar'
import AuthHelperMethods from '../AuthHelperMethods';
var moment = require('moment')

class StartProjectPage extends Component {
    Auth = new AuthHelperMethods()
    constructor(props) {
        super(props)
        this.state = {
            values: [],
            category: 'Art',
            title: '',
            description: '',
            team: '',
            goal: '',
            deadline: '',
            orgName: null,
            formInvalid: true,
            hideOrg: true
        }
    }

    startProject = (e) => {
        e.preventDefault()
        console.log(this.state);

        const {team, title, description, goal, deadline, category, orgName} = this.state;
        let tokenData = this.Auth.getTokenData()

        let org = orgName === null? '$Independent$': orgName.trim()
        let data = {
            'team': team.trim(),
            'title': title.trim(),
            'category': category,
            'description': description.trim(),
            'goal': parseInt(goal),
            'deadline': deadline,
            'username': tokenData.username,
            'orgName': org
        }

        let enteredDate = moment(this.state.deadline).format("YYYY-MM-DD")
        let currentDateString = moment().get('year')+"-"+(moment().get('month')+1)+"-"+moment().get('date');
        let currentDate = moment(currentDateString).format("YYYY-MM-DD")

        let isAfter = moment(enteredDate).isAfter(currentDate)

        if (!isAfter) {
            alert(`Please enter a date in the future, i.e. after ${moment(currentDate).format("DD-MM-YYYY")}`)
            return
        }
        axios.post('http://localhost:3003/start', data)
        .then((response) => {
            this.props.history.push({
                pathname:`/projects/${tokenData.username}/${org}/${team}/${title}/edit`,
            })
        })
        .catch((error) => {
            console.log(error.response.data)
            alert(error.response.data)
        })

    }

    componentDidMount() {
        axios.get('http://localhost:3003/categories')
            .then((response) => {
                this.setState({
                    values: response.data,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getCategoryDropdown = () => {
        let values = this.state.values;
        let optionsList = values.map((x, index) => <option key={index}>{x.category}</option>)
        return (
            <Form.Control as="select" name="category">
                {optionsList}
            </Form.Control >
        )
    }

    handleUserInput = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        console.log(`output: ${name} ${value}`);
        this.setState({ [name]: value });
        console.log(this.state);
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            const { title, description, team, deadline, goal, hideOrg, orgName } = this.state
            let isUnfilled = title == '' || description == '' || team == '' || deadline == '' || goal == '' || (!hideOrg && orgName === null)
            this.setState({
                formInvalid: isUnfilled
            })
        }

    }

    handleCheckboxChange = (e) => {
        let oldVal = this.state.hideOrg;
        this.setState({
            hideOrg: !oldVal
        })

    }

    render() {
        if (!this.Auth.loggedIn()) {
            this.props.history.replace('/login')
        }
        const shouldHideOrg = this.state.hideOrg;
        console.log(shouldHideOrg);
        
        return (
            <div>
                <NavbarComp />
                <h2 style={{ marginTop: "2%", textAlign: "center", fontFamily: "courier" }}> Let's get you started. </h2>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={7}>
                            <Form onSubmit={this.startProject}>
                                <Form.Group onChange={(event) => this.handleUserInput(event)}>
                                    <Form.Label>Project Category</Form.Label>
                                    {this.getCategoryDropdown()}
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Project Title</Form.Label>
                                    <Form.Control as="textarea" rows="1" name="title" onChange={(event) => this.handleUserInput(event)}
                                        placeholder="Tile that catches the eye of the reader." />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Project Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="description" onChange={(event) => this.handleUserInput(event)}
                                        placeholder="Let people know why you deserve to make your dreams come true." />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Project Team</Form.Label>
                                    <Form.Control type="text" name="team" placeholder="Put your creative hat on!" onChange={(event) => this.handleUserInput(event)} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Funding goal amount (S$)</Form.Label>
                                    <Form.Control type="number" name="goal" onChange={(event) => this.handleUserInput(event)} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Funding deadline</Form.Label>
                                    <Form.Control type="date" name="deadline" onChange={(event) => this.handleUserInput(event)} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Organization</Form.Label>
                                    <Form.Check style={{ marginBottom: "4px" }}
                                        type="checkbox"
                                        id="orgCheck"
                                        label="Independent Project"
                                        onChange={this.handleCheckboxChange}
                                        checked={this.state.hideOrg}
                                    />
                                    {
                                        !this.state.hideOrg
                                        ?(<Form.Control type="text" name="orgName" placeholder="Parent organization" onChange={(event) => this.handleUserInput(event)} />)
                                        : null
                                    }
                                </Form.Group>
                                <Button style={{justifyItems:"center"}}  variant="dark" type="submit" disabled={this.state.formInvalid}>
                                    Create Project
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(StartProjectPage)
