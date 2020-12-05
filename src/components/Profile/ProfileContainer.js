import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../redux/profileReducer'
import { withRouter } from "react-router";
import { withRedirecting } from '../../hoc/withAuthHoc';
import Profile from './Profile'
class ProfileContainer extends Component {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.match.params.userId)
    }
    render() {
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileDetails.profile,
    }
}

const AuthRedirectComponent = withRedirecting(ProfileContainer);

let withRoutingData = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfileThunkCreator })(withRoutingData);