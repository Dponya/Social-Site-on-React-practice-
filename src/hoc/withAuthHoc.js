import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        authorized: state.auth.isAuthorized
    }
}


export const withRedirecting = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.authorized) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }
    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent;
}


