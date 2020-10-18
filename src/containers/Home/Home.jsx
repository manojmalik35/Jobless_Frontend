import React from 'react';
import homeImg from '../../assets/home.jpg';
import Header from "../../components/Header/Header";

const Home = () => {
    return ( 
        <div className="base">
            <Header loginButton={true}></Header>
            <div className="showcase">
                <div className="showcase-heading"></div>
                <div className="img-container">
                    <img src={homeImg} alt="home-img" className="home-img"/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;