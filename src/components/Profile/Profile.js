import React from 'react';
/* import styles from './Profile.module.css' */
import Post from './MyPost/Post/Post'
import NewPost from './MyPost/NewPost/NewPost';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    const PostMapped = props.state.postData.map((post) => {
        return <Post message={post.message} />
    });

    return (
        <div>
            <ProfileInfo />
            <div>
                my posts
            </div>
            <NewPost addPost={props.addPost} newPostText={props.state.newPostText} updateText={props.updateText} />
            {PostMapped}
        </div>
    );
}

export default Profile;