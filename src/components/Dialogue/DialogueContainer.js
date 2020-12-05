import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRedirecting } from '../../hoc/withAuthHoc';
import { sendMessageDispatch, updateMessDispatch } from '../../redux/state';
import Dialogue from './Dialogue';

let mapStateToProps = (state) => {
    return {
        dialogueDetails: state.dialogueDetails,
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

export default compose(
    withRedirecting,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogue)