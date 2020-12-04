import React from 'react';
import { Redirect } from 'react-router-dom';

export const withRedirecting = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            debugger;
            if (!this.props.authorized) return <Redirect to={'/login'} />

            return <Component {...this.props} />
        }
    }
    return RedirectComponent;
}


