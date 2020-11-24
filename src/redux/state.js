import { rerender } from '../render'
const state = {

    profileDetails: {
        postData: [
            { message: 'Ooooh Its kazashka! I love!' },
            { message: 'Very nice!' }
        ],
    },
    dialogueDetails: {
        authorDialogue: [
            { name: 'Vladislav', id: 1 }, { name: 'Ariksey', id: 2 }
        ],

        messageDialogue: [
            { message: 'My Sexy Dodo hmmmmm', id: 1 }, { message: 'Hello world', id: 2 }
        ],
    },
    friendDetails: {
        users: [
            { name: 'Vladislav' },
            { name: 'Ariksey' }
        ]
    }
}

export let addPost = (message) => {
    state.profileDetails.postData.push({ message: message });
    rerender(state);
}

export default state;