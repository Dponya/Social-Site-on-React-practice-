import { connect } from 'react-redux';
import { addPostDispatch } from '../../../../redux/profileReducer'
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        profileDetails: state.profileDetails,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostDispatch(newPost));
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;