import React from 'react';
import styles from './Dialogue.module.css'

const Dialogue = () => {
    return (
        <div className={styles.dialogueWrapper}>
            <div className="dialogueUser">
                <div className="author">
                    Vlad
                </div>
                <div className="author">
                    Pipe
                </div>
            </div>
            <div className="dialogueMessages">
                <div className="message">
                    Random
                </div>
                <div className="message">
                    Lap
                </div>
            </div>
        </div>
    )
}

export default Dialogue;