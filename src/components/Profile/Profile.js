import React from 'react';
/* import styles from './Profile.module.css' */
import ProfileInfo from './ProfileInfo/ProfileInfo'
import NewPostContainer from './MyPost/NewPost/NewPostContainer';
/* import { connect } from 'react-redux'; */


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

/* const mapStateToProps = state => ({
    profile: state.profileDetails.profile
});

connect(mapStateToProps)(Profile); */

export default Profile;