import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profileReducer'
import { withRouter } from "react-router";
import { withRedirecting } from '../../hoc/withAuthHoc';
import Profile from './Profile'
import { compose } from 'redux';
class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        };
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
        // this.props.match.params.userId       
    }
    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                    updateStatus={this.props.updateStatusThunkCreator} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileDetails.profile,
        status: state.profileDetails.status,
        userId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
    withRouter,
    withRedirecting
)(ProfileContainer)