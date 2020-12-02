import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://d3gz42uwgl1r1y.cloudfront.net/do/dotrook/submission/2016/05/2d2a02624caa6d35930749691e490e8d.png" />
            {props.isAuthorized ? props.login : <NavLink to={'/login'} className={styles.auth}>Login</NavLink>}
        </header>
    )
}

export default Header;