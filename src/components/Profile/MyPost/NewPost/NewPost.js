import React from 'react';

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
        /* newPostElement.current.value = ''; */
    }

    let updateText = () => {
        let text = newPostElement.current.value;
        props.dispatch({
            type: 'UPDATE-TEXT',
            text: text,
        })
    }

    return (<div>
        <textarea onChange={updateText} value={props.newPostText} ref={newPostElement}>
        </textarea>
        <button onClick={addPost}>Set your fucking post</button>
    </div>
    )
}

export default NewPost;