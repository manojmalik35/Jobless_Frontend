import React from 'react';
import homeImg from '../../assets/home.jpg';
import Header from "../../components/Header/Header";
import {Card, CardDeck} from 'react-bootstrap';
import isLoggedIn from "../../hoc/isLoggedIn";
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

    const history = useHistory();
    const getStarted = () =>{
        history.push("/signup");
    }

    useEffect(()=>{
        document.title = "Jobless | Homepage";
    })

    return (
        <div className="base home">
            <Header loginButton={true}></Header>
            <div className="home-content">
                <div className="showcase">
                    <div className="showcase-heading">
                        <div>
                            Welcome to<br />
                        Job<span style={{ color: "#43AFFF" }}>Less</span>
                        </div>
                        <button className="btn home-btn" onClick={getStarted}>Get Started</button>
                    </div>
                    <div className="img-container">
                        <img src={homeImg} alt="home-img" className="home-img" />
                    </div>
                </div>
                <div className="whyus">
                    <h4>Why Us</h4>
                    <CardDeck>
                        <Card className="home-card">
                            <Card.Body>
                                <Card.Title>Get More Visibility</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="home-card">
                            <Card.Body>
                                <Card.Title>Organize your candidates</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="home-card">
                            <Card.Body>
                                <Card.Title>Verify their abilities</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        </div>
    );
}

export default isLoggedIn(Home);