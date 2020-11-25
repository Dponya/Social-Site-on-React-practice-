import React from 'react';
import { addPostDispatch, updateTextDispatch } from '../../../../redux/state';

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostDispatch());
        /* newPostElement.current.value = ''; */
    }

    let updateText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextDispatch(text));
    }

    return (<div>
        <textarea onChange={updateText} value={props.newPostText} ref={newPostElement}>
        </textarea>
        <button onClick={addPost}>Set your fucking post</button>
    </div>
    )
}

export default NewPost;