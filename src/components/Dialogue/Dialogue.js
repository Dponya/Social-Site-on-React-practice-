import React from 'react';
import styles from './Dialogue.module.css';
import DialogueAuthor from './DialogueAuthor/DialogueAuthor';
import Message from './Message/Message';


const Dialogue = (props) => {

    const AuthorMapped = props.authorDialogue.map((author) => {
        return <DialogueAuthor name={author.name} id={author.id} />
    });

    const MessageMapped = props.messageDialogue.map((message) => {
        return <Message message={message.message} id={message.id} />
    });

    return (
        <div className={styles.dialogueWrapper}>
            <div className="dialogueUser">
                {AuthorMapped}
            </div>
            <div className="dialogueMessages">
                {MessageMapped}
            </div>
        </div>
    )
}

export default Dialogue;