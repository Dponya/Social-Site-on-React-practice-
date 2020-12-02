import styles from '../Profile.module.css'
const ProfileInfo = (props) => {
    let name = props.profile.fullName
    if (!props.profile == null) {
        console.log(props.profile.photos.small)
    }
    return (
        <div>
            <img className={styles.imgTheme} src="https://cs8.pikabu.ru/post_img/big/2017/11/13/4/1510547981156877032.jpg" />
            {/* <img src={props.profile.photos.small} /> */}
            <div>

                {name}
            </div>
        </div>
    )
}

export default ProfileInfo;