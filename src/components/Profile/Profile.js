import React from 'react';
/* import styles from './Profile.module.css' */
import Post from './MyPost/Post/Post'
import NewPost from './MyPost/NewPost/NewPost';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <div>
                my posts
            </div>
            <NewPost />
            <Post message="Very nice!" />
        </div>
    )
}

export default Profile;