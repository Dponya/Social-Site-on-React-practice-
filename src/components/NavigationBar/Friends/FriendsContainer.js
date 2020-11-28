import Friends from "./Friends";
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        friendDetails: state.friendDetails,
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;