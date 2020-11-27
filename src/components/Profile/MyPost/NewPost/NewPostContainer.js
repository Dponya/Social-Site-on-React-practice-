import { connect } from 'react-redux';
import { addPostDispatch, updateTextDispatch } from '../../../../redux/state';
import NewPost from './NewPost';

let postMapStateToProps = (state) => {
    return {
        profileDetails: state.profileDetails,
    }
}

let postMapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostDispatch());
        },

        updateText: (text) => {
            dispatch(updateTextDispatch(text))
        }
    }
}

const NewPostContainer = connect(postMapStateToProps, postMapDispatchToProps)(NewPost);

export default NewPostContainer;