/* import styles from '../Profile.module.css' */
import ProfileStatus from '../ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
    let name = props.profile.fullName
    if (!props.profile == null) {
        console.log(props.profile.photos.small)
    }
    return (
        <div>
            <ProfileStatus />
            <div>
                {name}
            </div>
        </div>
    )
}

export default ProfileInfo;