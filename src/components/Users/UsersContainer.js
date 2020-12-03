import { connect } from 'react-redux';
import React, { Component } from 'react';
import Users from './Users';
import Loader from '../common/Loader';
import { follow, setCurrent, setLoader, setTotal, setUsers, unfollow, setFollowing } from '../../redux/usersReducer';
import { reqService } from '../../api/api'



class UsersContainerAPI extends Component {

    componentDidMount() {
        this.props.setLoader(true);
        reqService.getUsers()
            .then(response => {
                this.props.setLoader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotal(response.data.totalCount);
            });

    }
    pageChanged = (el) => {
        //this.props.setPageCounter(el);
        this.props.setLoader(true)
        reqService.getUsersWithEl(el)
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
                    setFollowing={this.props.setFollowing} followingProgress={this.props.followingProgress}
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
        followingProgress: state.usersDetails.followingProgress
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,

    unfollow,

    setUsers,

    setCurrent,

    setTotal,

    setLoader,

    setFollowing,
})(UsersContainerAPI);

export default UsersContainer;