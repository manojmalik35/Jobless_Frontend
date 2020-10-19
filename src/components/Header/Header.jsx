import React from 'react';
import Arrow from '../../assets/down-arrow.png';
import { Dropdown, Button } from 'react-bootstrap';

const Title = () => {
    return (
        <p>
            <span style={{ color: "white" }}>Job</span>
            <span style={{ color: "#43AFFF" }}>Less</span>
        </p>
    )
}



function getButton(loginButton) {
    if (!loginButton) return undefined;
    return (<a href="/login" className="login-btn">Login/Signup</a>)
}

function getProfileButton(role) {
    if (!role) return undefined;
    let symbol = "R";
    if (role == 2)
        symbol = "C";

    return (
        <div className="profile_block">
            {/* <div className="profile-pic rounded-circle">{symbol}</div>
            <img src={Arrow} alt="down-arrow" className="icon" /> */}
            <Dropdown>
                <Button className="profile-pic rounded-circle">{symbol}</Button>

                <Dropdown.Toggle className="icon" split id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item className="logout" href="#" onClick={}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

const Header = (props) => {
    function getAnchor(role) {
        if (!role) return undefined;
        if (role == 1)
            return (<a href="#" onClick={() => { props.handleMenuChange("Post") }}>Post a Job</a>);
        return (<a href="#" onClick={() => { props.handleMenuChange("Applied") }}>Applied Jobs</a>);
    }

    return (
        <nav>
            <Title></Title>
            <div className="header-profile">
                {getAnchor(props.role)}
                {getButton(props.loginButton)}
                {getProfileButton(props.role)}
            </div>
        </nav>
    );
}

export default Header;