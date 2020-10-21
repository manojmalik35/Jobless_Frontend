import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../actions/authActions';
import { clearJobsAction } from '../../actions/jobActions';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    if (!role && role != 0) return undefined;
    if (role == 1)
        return (<a href="#" onClick={() => { props.handleMenuChange("Post") }}>Post a Job</a>);
    if (role == 2)
        return (<a href="#" onClick={() => { props.handleMenuChange("Applied") }}>Applied Jobs</a>);
    else {
        return (
            <div className="header-anchors">
                <a href="#" onClick={() => { props.handleMenuChange("Recruiters") }}>Recruiters</a>
                <a href="#" onClick={() => { props.handleMenuChange("Candidates") }}>Candidates</a>
            </div>
        )
    }
}

const Header = (props) => {


    let symbol = "R";
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    if (auth.isUserLoggedIn) {
        if (auth.user.role == 2) symbol = "C";
        else if (auth.user.role == 0) symbol = "A";
    }
    const handleLogout = () => {
        dispatch(logoutAction());
        dispatch(clearJobsAction());
        history.push("/");
        toast.success("You have successfully logged out.", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: false
        });
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Content className="logout" onClick={handleLogout}>
                Logout
          </Popover.Content>
        </Popover>
    );

    return (
        <nav>
            <Title></Title>
            <div className="header-profile">
                {getAnchor(props)}
                {getButton(props.loginButton)}
                {auth.isUserLoggedIn ?
                    <div className="profile_block">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Button className="profile-pic rounded-circle">{symbol}</Button>
                        </OverlayTrigger>
                    </div>
                    : ''}
            </div>
        </nav>
    );
}

export default Header;