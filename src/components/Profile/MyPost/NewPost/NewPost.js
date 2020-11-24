import React from 'react';

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        /* newPostElement.current.value = ''; */
    }

    let updateText = () => {
        let text = newPostElement.current.value;
        props.updateText(text);
    }

    return (<div>
        <textarea onChange={updateText} value={props.newPostText} ref={newPostElement}>
        </textarea>
        <button onClick={addPost}>Set your fucking post</button>
    </div>
    )
}

export default NewPost;