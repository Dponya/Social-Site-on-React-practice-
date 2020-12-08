import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authThunkCreator, logouthunkCreator } from '../../redux/authReducer'

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.authThunkCreator();
    }
    render() {
        return (
            <Header login={this.props.login} isAuthorized={this.props.isAuthorized} logout={this.props.logouthunkCreator} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { authThunkCreator, logouthunkCreator })(HeaderContainer);