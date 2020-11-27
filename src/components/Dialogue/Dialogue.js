import React from 'react';
import styles from './Dialogue.module.css';
import DialogueAuthor from './DialogueAuthor/DialogueAuthor';
import Message from './Message/Message';


const Dialogue = (props) => {

    const AuthorMapped = props.dialogueDetails.authorDialogue.map((author) => {
        return <DialogueAuthor name={author.name} id={author.id} />
    });

    const MessageMapped = props.dialogueDetails.messageDialogue.map((message) => {
        return <Message message={message.message} id={message.id} />
    });

    let newMessElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage()
    }

    let onUpdateMess = () => {
        let text = newMessElement.current.value;
        props.updateMess(text)
    }

    return (

        <div className={styles.dialogueWrapper}>
            <div className="dialogueUser">
                {AuthorMapped}
            </div>
            <div className="dialogueMessages">
                {MessageMapped}
                <div>
                    <textarea onChange={onUpdateMess} value={props.infoDialogue} ref={newMessElement}>
                    </textarea>
                    <button onClick={onSendMessage}>Send your fucking message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogue;