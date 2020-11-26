export const addPost = (state) => {
    let post = {
        message: state.newPostText
    }
    state.postData.push(post);
    state.newPostText = '';
}

export const updateText = (text, state) => {
    state.newPostText = text;
}

export const sendMessage = (state) => {
    state.messageDialogue.push({ message: state.infoDialogue, id: 3 })
    state.infoDialogue = '';
}

export const updateMess = (text, state) => {
    state.infoDialogue = text;
}