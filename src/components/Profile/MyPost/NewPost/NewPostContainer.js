import { connect } from 'react-redux';
import { addPostDispatch, updateTextDispatch } from '../../../../redux/state';
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        profileDetails: state.profileDetails,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostDispatch());
        },

        updateText: (text) => {
            dispatch(updateTextDispatch(text))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;