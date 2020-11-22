import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogue.module.css'

const DialogueAuthor = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}


const Dialogue = () => {
    return (
        <div className={styles.dialogueWrapper}>
            <div className="dialogueUser">
                <DialogueAuthor name="Vladislav" id="1" />
                <DialogueAuthor name="Ariksey" id="2" />
            </div>
            <div className="dialogueMessages">
                <Message message="My Sexy Dodo" />
                <Message message="Alalalalal" />
            </div>
        </div>
    )
}

export default Dialogue;