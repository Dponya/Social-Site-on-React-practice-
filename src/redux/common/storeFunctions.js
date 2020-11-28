export const addPost = (state) => {
    let stateCopy = { ...state }
    let post = {
        message: stateCopy.newPostText
    }
    stateCopy.postData = [...state.postData];
    stateCopy.postData.push(post);
    stateCopy.newPostText = '';
    return stateCopy;
}

export const updateText = (text, state) => {
    let stateCopy = { ...state }
    stateCopy.newPostText = text;
    return stateCopy
}

export const sendMessage = (state) => {
    let stateCopy = { ...state }
    stateCopy.messageDialogue = [...state.messageDialogue];
    stateCopy.messageDialogue.push({ message: stateCopy.infoDialogue, id: 3 });
    stateCopy.infoDialogue = '';
    return stateCopy;
}

export const updateMess = (text, state) => {
    let stateCopy = { ...state };
    stateCopy.infoDialogue = text;
    return stateCopy;
}