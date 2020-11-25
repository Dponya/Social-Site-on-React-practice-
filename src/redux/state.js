
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

    addPost() {
        let post = {
            message: this._state.profileDetails.newPostText
        }
        this._state.profileDetails.postData.push(post);
        this.rerender(this._state);
        this._state.profileDetails.newPostText = '';
    },

    updateText(text) {
        this._state.profileDetails.newPostText = text;
        this.rerender(this._state);
    },

    sendMessage() {
        this._state.dialogueDetails.messageDialogue.push({ message: this._state.dialogueDetails.infoDialogue, id: 3 })
        this.rerender(this._state);
        this._state.dialogueDetails.infoDialogue = '';
    },

    updateMess(text) {
        this._state.dialogueDetails.infoDialogue = text;
        this.rerender(this._state);
    },

    subscribe(observ) {
        this.rerender = observ;
    },

    getState() {
        return this._state;
    }
}

export default store;