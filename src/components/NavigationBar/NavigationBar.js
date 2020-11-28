import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css'
import FriendsContainer from './Friends/FriendsContainer';

const NavigationBar = (props) => {
    return (
        <nav className={styles.leftBar}>
            <div className={`${styles.leftBar} ${styles.active}`}>
                <NavLink to="/profile" activeClassName={styles.leftBarActive}>Profile</NavLink>

            </div>
            <div className={styles.leftBar}>
                <NavLink to="/dialogs" activeClassName={styles.leftBarActive}>Dialogs</NavLink>
            </div>
            <div className={styles.leftBar}>
                <a>News</a>
            </div>
            <div className={styles.leftBar}>
                <a>Music</a>
            </div>
            <div className={styles.leftBar}>
                <a>Settings</a>
            </div>
            <div className={styles.leftBar}>
                <a>Friends</a>
                <FriendsContainer />
            </div>
        </nav>
    )
}

export default NavigationBar;