import React from 'react';
import { addPostDispatch, updateTextDispatch } from '../../../../redux/state';
import NewPost from './NewPost';

const NewPostContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostDispatch());
    }

    let updateText = (text) => {
        props.store.dispatch(updateTextDispatch(text));
    }

    return (
        <NewPost addPost={addPost} updateText={updateText} newPostText={props.store.getState().newPostText} />
    )
}

export default NewPostContainer;