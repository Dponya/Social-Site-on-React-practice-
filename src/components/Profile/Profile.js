import React from 'react';
/* import styles from './Profile.module.css' */
import ProfileInfo from './ProfileInfo/ProfileInfo'
import NewPostContainer from './MyPost/NewPost/NewPostContainer';
import { connect } from 'react-redux';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <div>
                my posts
            </div>
            <NewPostContainer
                store={props.store}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    profileDetails: state.profileDetails
});

connect(mapStateToProps)(Profile);

export default Profile;