import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRedirecting } from '../../hoc/withAuthHoc';
import { sendMessageDispatch } from '../../redux/dialogueReducer'
import Dialogue from './Dialogue';

let mapStateToProps = (state) => {
    return {
        dialogueDetails: state.dialogueDetails,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMess) => {
            dispatch(sendMessageDispatch(newMess));
        }
    }
}

export default compose(
    withRedirecting,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogue)