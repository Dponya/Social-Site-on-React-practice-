import { dialogueReducer } from "./dialogueReducer";
import { profileReducer } from "./profileReducer";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESS = 'UPDATE-MESS';


let store = {

    _state: {

        profileDetails: {
            postData: [
                { message: 'Ooooh Its kazashka! I love!' },
                { message: 'Very nice!' }
            ],
            newPostText: '',
        },
        dialogueDetails: {
            authorDialogue: [
                { name: 'Vladislav', id: 1 }, { name: 'Ariksey', id: 2 }
            ],

            messageDialogue: [
                { message: 'My Sexy Dodo hmmmmm', id: 1 }, { message: 'Hello world', id: 2 }
            ],

            infoDialogue: '',
        },
        friendDetails: {
            users: [
                { name: 'Vladislav' },
                { name: 'Ariksey' }
            ]
        }
    },

    rerender() {
        console.log('State changed');
    },

    subscribe(observ) {
        this.rerender = observ;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profileDetails = profileReducer(this._state.profileDetails, action);
        this._state.dialogueDetails = dialogueReducer(this._state.dialogueDetails, action);
        this.rerender(this._state);
    }
}

export const sendMessageDispatch = (newMess) => ({ type: SEND_MESSAGE, newMess });
export const updateMessDispatch = (text) => ({ type: UPDATE_MESS, text: text });

export default store;