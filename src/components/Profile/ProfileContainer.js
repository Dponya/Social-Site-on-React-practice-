import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../redux/profileReducer'
import Profile from './Profile';
import { withRouter } from "react-router";

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.match.params.userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileDetails.profile,
    }
}

let withRoutingData = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfileThunkCreator })(withRoutingData);