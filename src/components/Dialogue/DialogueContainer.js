import { connect } from 'react-redux';
import { withRedirecting } from '../../hoc/withAuthHoc';
import { sendMessageDispatch, updateMessDispatch } from '../../redux/state';
import Dialogue from './Dialogue';

let mapStateToProps = (state) => {
    return {
        dialogueDetails: state.dialogueDetails,
        authorized: state.auth.isAuthorized
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

const MSGauthRedirectComponent = withRedirecting(Dialogue);

const DialogueContainer = connect(mapStateToProps, mapDispatchToProps)(MSGauthRedirectComponent);

export default DialogueContainer;