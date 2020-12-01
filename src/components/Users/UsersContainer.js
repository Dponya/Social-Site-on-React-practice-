import { connect } from 'react-redux';
import React, { Component } from 'react';
import { followActionCreator, setCurrentPageActionCreator, setLoaderActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import Loader from '../common/Loader';




class UsersContainerAPI extends Component {

    componentDidMount() {
        this.props.setLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=5`) //?page=1&count=5
            .then(response => {
                this.props.setLoader(false);
                this.props.setUser(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });

    }

    pageChanged = (el) => {
        //this.props.setPageCounter(el);
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=5`)
            .then(response => {
                this.props.setLoader(false);
                this.props.setUser(response.data.items);
            });
    }

    render() {
        return (<>
            {this.props.isFetching ?
                <Loader /> :
                <Users follow={this.props.follow} unfollow={this.props.unfollow}
                    users={this.props.users} totalCount={this.props.totalCount}
                    pageCount={this.props.pageCount} pageChanged={this.pageChanged}

                />}
        </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersDetails.users,
        totalCount: state.usersDetails.totalCount,
        pageCount: state.usersDetails.pageCount,
        currentPage: state.usersDetails.currentPage,
        isFetching: state.usersDetails.isFetching,
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
        },

        setLoader: (boolean) => {
            dispatch(setLoaderActionCreator(boolean))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);

export default UsersContainer;