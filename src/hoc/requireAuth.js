import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';

export default (ChildComponent) => {
    class requireAuth extends React.Component {
        render() {
            let is_logged_in = this.props.auth.isUserLoggedIn;
            if (is_logged_in) {
                return <ChildComponent />;
            }

            return <Redirect to='/login' />;

        }
    }

    const mapStateToProps = (state) => ({
        auth: state.auth
    });

    return connect(mapStateToProps, {})(requireAuth);
};