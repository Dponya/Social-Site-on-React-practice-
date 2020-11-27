import React from 'react';

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onUpdateText = () => {
        let text = newPostElement.current.value;
        props.updateText(text)
    }

    return (<div>
        <textarea onChange={onUpdateText} value={props.newPostText} ref={newPostElement}>
        </textarea>
        <button onClick={onAddPost}>Set your fucking post</button>
    </div>
    )
}

export default NewPost;