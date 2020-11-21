import React from 'react';
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
    return (
        <nav className={styles.leftBar}>
            <div className={`${styles.leftBar} ${styles.active}`}>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default NavigationBar;