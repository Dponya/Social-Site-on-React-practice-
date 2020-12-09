import { connect } from 'react-redux';
import React, { Component } from 'react';
import Users from './Users';
import Loader from '../common/Loader';
import {
    follow, setCurrent, setLoader,
    setTotal, setUsers, unfollow, setFollowing, getUsersThunkCreator,
    pageChangedThunkCreator, unfollowThunkCreator, followThunkCreator
} from '../../redux/usersReducer';
import { withRedirecting } from '../../hoc/withAuthHoc'
import { compose } from 'redux';
import { sateCurrentPage, stateFollowingProgress, stateIsFetching, statePageCount, stateTotalCount, stateUsers } from '../../redux/selectors/userSelector'


class UsersContainerAPI extends Component {

    componentDidMount() {
        this.props.getUsersThunkCreator();
    }
    pageChanged = (el) => {
        this.props.pageChangedThunkCreator(el);
    }
    render() {
        return (<>
            {this.props.isFetching ?
                <Loader /> :
                <Users follow={this.props.follow} unfollow={this.props.unfollow}
                    users={this.props.users} totalCount={this.props.totalCount}
                    pageCount={this.props.pageCount} pageChanged={this.pageChanged}
                    setFollowing={this.props.setFollowing} followingProgress={this.props.followingProgress}
                    unfollowThunkCreator={this.props.unfollowThunkCreator} followThunkCreator={this.props.followThunkCreator}
                />}
        </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: stateUsers(state),
        totalCount: stateTotalCount(state),
        pageCount: statePageCount(state),
        currentPage: sateCurrentPage(state),
        isFetching: stateIsFetching(state),
        followingProgress: stateFollowingProgress(state)
    }
}

export default compose(
    withRedirecting,
    connect(mapStateToProps, {
        follow,

        unfollow,

        setUsers,

        setCurrent,

        setTotal,

        setLoader,

        setFollowing,

        getUsersThunkCreator,

        pageChangedThunkCreator,

        unfollowThunkCreator,

        followThunkCreator,
    })
)(UsersContainerAPI)