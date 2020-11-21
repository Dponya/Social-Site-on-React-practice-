import React from 'react';
/* import styles from './Profile.module.css' */
import Post from './MyPost/Post/Post'
import NewPost from './MyPost/NewPost/NewPost';

const Profile = () => {
    return (
        <div>
            <img src="https://cs8.pikabu.ru/post_img/big/2017/11/13/4/1510547981156877032.jpg" />
            <div>
                ava + des
      </div>
            <div>
                my posts
            </div>
            <NewPost />
            <Post message="Very nice!" />
        </div>
    )
}

export default Profile;