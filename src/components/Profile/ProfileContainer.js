import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profileReducer'
import { withRouter } from "react-router";
import { withRedirecting } from '../../hoc/withAuthHoc';
import Profile from './Profile'
import { compose } from 'redux';
class ProfileContainer extends Component {
    componentDidMount() {
        this.props.getProfileThunkCreator(13034)
        this.props.getStatusThunkCreator(13034)
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
        status: state.profileDetails.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
    withRouter,
    withRedirecting
)(ProfileContainer)