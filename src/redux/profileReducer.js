import { addPost, updateText } from './common/storeFunctions'
let initialState = {
    postData: [
        { message: 'Ooooh Its kazashka! I love!' },
        { message: 'Very nice!' }
    ],
    newPostText: '',
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            addPost(state);
            return state;
        case 'UPDATE-TEXT':
            updateText(action.text, state);
            return state;
        default:
            return state;
    }
}