import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from "react-router";

class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(response => {
                this.props.setProfile(response.data);
                console.log(response.data)
            });
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

export default connect(mapStateToProps, { setProfile })(withRoutingData);