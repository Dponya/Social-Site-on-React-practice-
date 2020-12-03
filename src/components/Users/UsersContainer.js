import { connect } from 'react-redux';
import React, { Component } from 'react';
import Users from './Users';
import Loader from '../common/Loader';
import { follow, setCurrent, setLoader, setTotal, setUsers, unfollow } from '../../redux/usersReducer';
import { reqService } from '../../api/api'



class UsersContainerAPI extends Component {

    componentDidMount() {
        this.props.setLoader(true);
        reqService.getUsers()
            .then(response => {
                this.props.setLoader(false);
                this.props.setUser(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
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
                    pageCount={this.props.pageCount} pageChanged={this.pageChanged} />}
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

const UsersContainer = connect(mapStateToProps, {
    follow: follow,

    unfollow: unfollow,

    setUser: setUsers,

    setPageCounter: setCurrent,

    setTotalCount: setTotal,

    setLoader: setLoader
})(UsersContainerAPI);

export default UsersContainer;