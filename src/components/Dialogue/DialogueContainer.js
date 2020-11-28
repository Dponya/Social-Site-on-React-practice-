import { connect } from 'react-redux';
import { sendMessageDispatch, updateMessDispatch } from '../../redux/state';
import Dialogue from './Dialogue';

let mapStateToProps = (state) => {
    return {
        dialogueDetails: state.dialogueDetails
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMess: (text) => {
            dispatch(updateMessDispatch(text));
        },
        sendMessage: () => {
            dispatch(sendMessageDispatch());
        }
    }
}

const DialogueContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogue);

export default DialogueContainer;