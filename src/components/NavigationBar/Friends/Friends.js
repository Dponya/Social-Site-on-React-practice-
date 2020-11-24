import React from 'react';
import styles from './Friends.module.css';

const Friends = (props) => {
    let friendidx = props.state.map((friend) => <p>{friend.name}</p>)
    return (
        <div className={styles.friendWrapper}>
            <div>
                <img className={styles.ImageAva} src="https://sun9-54.userapi.com/SnfXj9Y2_DXQs3zbnrPfuFacyEu1W8wmOjXH2w/QogNWXehEQQ.jpg" />
                {friendidx[0]}
            </div>
            <div>
                <img className={styles.ImageAva} src="https://sun9-20.userapi.com/UR3oH-o0BBtRdYyjR9-eDRZ-2wFq0A5jsmOGvw/1tFNWSAOHs0.jpg" />
                {friendidx[1]}
            </div>
        </div>
    )
}

export default Friends;

