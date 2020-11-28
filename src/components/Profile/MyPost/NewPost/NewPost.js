import React from 'react';
import Post from '../Post/Post'

const NewPost = (props) => {

    const PostMapped = props.profileDetails.postData.map((post) => {
        return <Post message={post.message} />
    });

    let newPostElement = React.createRef();



    let onAddPost = () => {
        props.addPost();
    }

    let onUpdateText = () => {
        let text = newPostElement.current.value;
        props.updateText(text)
    }

    return (<div>
        <textarea onChange={onUpdateText} value={props.profileDetails.newPostText} ref={newPostElement}>
        </textarea>
        <button onClick={onAddPost}>Set your fucking post</button>
        {PostMapped}
    </div>
    )
}

export default NewPost;