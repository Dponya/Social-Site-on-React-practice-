const SEND_MESSAGE = 'SEND-MESSAGE';

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
            return {
                ...state,
                messageDialogue: [...state.messageDialogue, { message: action.newMess }]
            }
        default:
            return state;
    }
}


export const sendMessageDispatch = (newMess) => ({ type: SEND_MESSAGE, newMess });