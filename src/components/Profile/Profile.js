import React from 'react';
/* import styles from './Profile.module.css' */
import Post from './MyPost/Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import NewPostContainer from './MyPost/NewPost/NewPostContainer';

const Profile = (props) => {
    const PostMapped = props.store.getState().profileDetails.postData.map((post) => {
        return <Post message={post.message} />
    });

    return (
        <div>
            <ProfileInfo />
            <div>
                my posts
            </div>
            <NewPostContainer
                store={props.store}
            />
            {PostMapped}
        </div>
    );
}

export default Profile;