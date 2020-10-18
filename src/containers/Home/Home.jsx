import React from 'react';
import homeImg from '../../assets/home.jpg';
import Header from "../../components/Header/Header";
import {Card, CardDeck} from 'react-bootstrap';

const Home = () => {
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
                        <button className="btn home-btn">Get Started</button>
                    </div>
                    <div className="img-container">
                        <img src={homeImg} alt="home-img" className="home-img" />
                    </div>
                </div>
                <div className="whyus">
                    <h4>Why Us</h4>
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        </div>
    );
}

export default Home;