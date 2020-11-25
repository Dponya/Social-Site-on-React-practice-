import React from 'react';
import styles from './Dialogue.module.css';
import DialogueAuthor from './DialogueAuthor/DialogueAuthor';
import Message from './Message/Message';


const Dialogue = (props) => {

    const AuthorMapped = props.state.authorDialogue.map((author) => {
        return <DialogueAuthor name={author.name} id={author.id} />
    });

    const MessageMapped = props.state.messageDialogue.map((message) => {
        return <Message message={message.message} id={message.id} />
    });

    let newMessElement = React.createRef();

    let sendMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE' });
    }

    let updateText = () => {
        let text = newMessElement.current.value;
        props.dispatch({ type: 'UPDATE-MESS', text: text });
    }

    return (


        <div className={styles.dialogueWrapper}>
            <div className="dialogueUser">
                {AuthorMapped}
            </div>
            <div className="dialogueMessages">
                {MessageMapped}
                <div>
                    <textarea onChange={updateText} value={props.state.infoDialogue} ref={newMessElement}>
                    </textarea>
                    <button onClick={sendMessage}>Send your fucking message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogue;