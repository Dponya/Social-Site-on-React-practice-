import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import UsersC from './UsersC';


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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;