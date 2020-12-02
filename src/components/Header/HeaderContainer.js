import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as axios from 'axios';
import { setAuthUserData } from '../../redux/authReducer'

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                const { login, email, id } = response.data.data;
                this.props.setAuthUserData(login, email, id);
            });
    }
    render() {
        return (
            <Header login={this.props.login} isAuthorized={this.props.isAuthorized} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);