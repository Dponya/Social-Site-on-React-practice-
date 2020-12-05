import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import NewPostContainer from './MyPost/NewPost/NewPostContainer';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <div>
                my posts
            </div>
            <NewPostContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;