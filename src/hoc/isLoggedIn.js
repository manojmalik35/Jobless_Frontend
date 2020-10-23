import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';

export default (ChildComponent) => {
    class loggedIn extends React.Component {
        render() {
            let is_logged_in = this.props.auth.isUserLoggedIn;
            if (is_logged_in) {
                if (this.props.auth.user.role == 1)
                    return <Redirect to='/recruiter-profile/1' />;
                else if (this.props.auth.user.role == 2) 
                    return <Redirect to='/candidate-profile/1' />;
                else
                    return <Redirect to='/admin-profile/1' />;
            }

            return <ChildComponent/>;
        }
    }

    const mapStateToProps = (state) => ({
        auth: state.auth
    });

    return connect(mapStateToProps, {})(loggedIn);
};