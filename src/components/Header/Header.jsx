import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {logoutAction} from '../../actions/authActions';
import {clearJobsAction} from '../../actions/jobActions';
import {useHistory} from 'react-router-dom';

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

function getAnchor(props) {
    let { role } = props;
    if (!role) return undefined;
    if (role == 1)
        return (<a href="#" onClick={() => { props.handleMenuChange("Post") }}>Post a Job</a>);
    return (<a href="#" onClick={() => { props.handleMenuChange("Applied") }}>Applied Jobs</a>);
}

const Header = (props) => {


    let symbol = "R";
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    if (auth.isUserLoggedIn) {
        if (auth.user.role == 2) symbol = "C";
    }
    const handleLogout = ()=>{
        dispatch(logoutAction());
        dispatch(clearJobsAction());
        history.push("/");
    }

    return (
        <nav>
            <Title></Title>
            <div className="header-profile">
                {getAnchor(props)}
                {getButton(props.loginButton)}
                {auth.isUserLoggedIn ?
                    <div className="profile_block">
                        <Dropdown>
                            <Button className="profile-pic rounded-circle">{symbol}</Button>

                            <Dropdown.Toggle className="icon" split id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item className="logout" href="#" onClick={handleLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    : ''}
            </div>
        </nav>
    );
}

export default Header;