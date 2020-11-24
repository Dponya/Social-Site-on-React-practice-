import React from 'react';

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (<div>
        <textarea ref={newPostElement}>
        </textarea>
        <button onClick={addPost}>Set your fucking post</button>
    </div>
    )
}

export default NewPost;