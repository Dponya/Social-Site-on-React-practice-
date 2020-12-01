import { connect } from 'react-redux';
import React, { Component } from 'react';
import { followActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';




class UsersContainerAPI extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=5`) //?page=1&count=5
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });

    }

    pageChanged = (el) => {
        //this.props.setPageCounter(el);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=5`)
            .then(response => {
                this.props.setUser(response.data.items);
            });
    }

    render() {
        return (
            <Users follow={this.props.follow} unfollow={this.props.unfollow}
                users={this.props.users} totalCount={this.props.totalCount}
                pageCount={this.props.pageCount} pageChanged={this.pageChanged}

            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersDetails.users,
        totalCount: state.usersDetails.totalCount,
        pageCount: state.usersDetails.pageCount,
        currentPage: state.usersDetails.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followActionCreator(usersId));
        },

        unfollow: (usersId) => {
            dispatch(unfollowActionCreator(usersId));
        },

        setUser: (users) => {
            dispatch(setUsersActionCreator(users));
        },

        setPageCounter: (count) => {
            dispatch(setCurrentPageActionCreator(count));
        },

        setTotalCount: (pageCount) => {
            dispatch(setTotalCountActionCreator(pageCount));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);

export default UsersContainer;