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
            return addPost(state);

        case 'UPDATE-TEXT':
            return updateText(action.text, state);
        default:
            return state;
    }
}