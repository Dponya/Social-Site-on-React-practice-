import styles from '../Profile.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <img className={styles.imgTheme} src="https://cs8.pikabu.ru/post_img/big/2017/11/13/4/1510547981156877032.jpg" />
            <div>
                ava + des
            </div>
        </div>
    )
}

export default ProfileInfo;