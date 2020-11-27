import { connect } from 'react-redux';
import { sendMessageDispatch, updateMessDispatch } from '../../redux/state';
import Dialogue from './Dialogue';

let omapStateToProps = (state) => {
    return {
        dialogueDetails: state.dialogueDetails
    }
}

let omapDispatchToProps = (dispatch) => {
    return {
        updateMess: (text) => {
            dispatch(updateMessDispatch(text));
        },
        sendMessage: () => {
            dispatch(sendMessageDispatch());
        }
    }
}

const DialogueContainer = connect(omapStateToProps, omapDispatchToProps)(Dialogue);

export default DialogueContainer;