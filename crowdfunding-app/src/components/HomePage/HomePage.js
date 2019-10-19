import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Navbar, Nav, Carousel, Form, FormControl, Button } from 'react-bootstrap';
import './HomePage.css'
import LoginPage from '../LoginPage/LoginPage'
import NavbarComp from '../NavBar/NavBar'
import fundit from '../../images/fundit.png'
import books from '../../images/books.jpg'
import game from '../../images/game.jpg'
import movie from '../../images/movie.jpg'


const Divider = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
);

class HomePage extends Component {

    render() {
        return (
            <div>

                <NavbarComp />
                <div style={{ display: 'flex', justifyContent: 'center', margin: "10px" }}>
                    {/* <div style={{textAlign:"center"}}> */}
                    <Form inline style={{ textAlign: "center" }}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {/* </div> */}
                </div>
                <Divider color="gray" />
                <div className="sub-heading">
                    <p style={{ color: "gray", fontFamily: "sans-serif" }} > Featured Projects </p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        margin: "5px",
                        textAlign: "center", width: "850px",
                        display: "inline-block"
                    }}>
                        <Carousel >
                            <Carousel.Item>
                                <img
                                    src={books}
                                    alt="books"
                                    style={{ width: 850, height: 500 }}
                                />
                                <Carousel.Caption>
                                    <h3>Hidden in the Dark</h3>
                                    <p>A crime thriller that will keep you on the edge of your seat.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={game}
                                    alt="game"
                                    style={{ width: 850, height: 500 }}
                                />

                                <Carousel.Caption>
                                    <h3>No Man's Sky</h3>
                                    <p>Action-adventure survival game based on id Tech 3.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={movie}
                                    alt="movie"
                                    style={{ width: 850, height: 500 }}
                                />
                                <Carousel.Caption>
                                    <h3>Reel It In</h3>
                                    <p>Animated short film. Made with love. For you.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* <Link to="/login"><Button>Click ME </Button></Link> */}
            </div>
        )
    }
}

// export default HomePage;
export default withRouter(HomePage);