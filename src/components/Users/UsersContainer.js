import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import UsersC from './UsersC';


let mapStateToProps = (state) => {
    return {
        users: state.usersDetails.users
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;