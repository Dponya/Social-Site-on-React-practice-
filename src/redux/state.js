import { rerender } from '../render'
const state = {

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
}

export let addPost = () => {
    let post = {
        message: state.profileDetails.newPostText
    }
    state.profileDetails.postData.push(post);
    rerender(state);
    state.profileDetails.newPostText = '';
}

export let updateText = (text) => {
    state.profileDetails.newPostText = text;
    rerender(state);
}

export let sendMessage = () => {
    state.dialogueDetails.messageDialogue.push({ message: state.dialogueDetails.infoDialogue, id: 3 })
    rerender(state);
    state.dialogueDetails.infoDialogue = '';
}

export let updateMess = (text) => {
    state.dialogueDetails.infoDialogue = text;
    rerender(state);
}

export default state;