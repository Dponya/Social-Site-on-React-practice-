import { sendMessage, updateMess } from './common/storeFunctions'

let initialState = {
    authorDialogue: [
        { name: 'Vladislav', id: 1 }, { name: 'Ariksey', id: 2 }
    ],

    messageDialogue: [
        { message: 'My Sexy Dodo hmmmmm', id: 1 }, { message: 'Hello world', id: 2 }
    ],

    infoDialogue: '',
}

export const dialogueReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            sendMessage(state);
            return state;
        case 'UPDATE-MESS':
            updateMess(action.text, state);
            return state;
        default:
            return state;
    }
}