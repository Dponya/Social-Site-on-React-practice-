import React from 'react';
import styles from './Post.module.css';

const Post = React.memo((props) => {
    console.log('render')
    return (
        <div className={styles.post}>
            <img src="https://i.mycdn.me/image?id=547153836623&plc=WEB&tkn=*jDsHLSHBPk3k6AjJYNnco-xwO3U&fn=sqr_288" />
            {props.message}
        </div>
    )
});

export default Post;