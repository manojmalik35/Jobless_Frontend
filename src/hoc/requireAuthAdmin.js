import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';

export default (ChildComponent) => {
    class requireAuth extends React.Component {
        constructor(props){
            super(props);
        }
        render() {
            let is_logged_in = this.props.auth.isUserLoggedIn;
            if (is_logged_in) {
                return <ChildComponent {...this.props}/>;
            }

            return <Redirect to='/login/admin' />;

        }
    }

    const mapStateToProps = (state) => ({
        auth: state.auth
    });

    return connect(mapStateToProps, {})(requireAuth);
};