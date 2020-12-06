import React from 'react';
import styles from './Dialogue.module.css';
import DialogueAuthor from './DialogueAuthor/DialogueAuthor';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';

const Dialogue = (props) => {

    const AuthorMapped = props.dialogueDetails.authorDialogue.map((author) => {
        return <DialogueAuthor name={author.name} id={author.id} />
    });

    const MessageMapped = props.dialogueDetails.messageDialogue.map((message) => {
        return <Message message={message.message} id={message.id} />
    });

    let onSendMessage = (values) => {
        props.sendMessage(values.newMess)
    }
    if (props.authorized) {
        return (
            <div className={styles.dialogueWrapper}>
                <div className="dialogueUser">
                    {AuthorMapped}
                </div>
                <div className="dialogueMessages">
                    {MessageMapped}
                    <div>
                        <MessSendHOC onSubmit={onSendMessage} />
                    </div>

                </div>
            </div>
        )
    }

    else {
        return (
            <Redirect to="/login" />
        )
    }
}


export default Dialogue;

let MessSend = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newMess" component="textarea" type="text" />
            <button>Send your fucking message</button>
        </form>
    )
}

const MessSendHOC = reduxForm({ form: "message" })(MessSend)