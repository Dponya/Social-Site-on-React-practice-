import React from 'react';
import Post from '../Post/Post'
import { Field, reduxForm } from 'redux-form';

let PostWriting = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPost" component="textarea" type="text" />
            <button>Set your fucking post</button>
        </form>
    )
}

const PostWritingHOC = reduxForm({ form: "post" })(PostWriting)

const NewPost = (props) => {

    const PostMapped = props.profileDetails.postData.map((post) => {
        return <Post message={post.message} />
    });



    let onAddPost = (values) => {
        props.addPost(values.newPost);
    }

    return (<div>
        <PostWritingHOC onSubmit={onAddPost} />
        {PostMapped}
    </div>
    )
}

export default NewPost;
