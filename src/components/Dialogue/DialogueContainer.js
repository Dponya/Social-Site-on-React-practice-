import React from 'react';
import { sendMessageDispatch, updateMessDispatch } from '../../redux/state';
import Dialogue from './Dialogue';


const DialogueContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(sendMessageDispatch());
    }

    let updateMess = (text) => {
        props.store.dispatch(updateMessDispatch(text));
    }

    return (
        <Dialogue sendMessage={sendMessage}
            updateMess={updateMess}
            dialogueDetails={props.store.getState().dialogueDetails}
        />
    )
}

export default DialogueContainer;