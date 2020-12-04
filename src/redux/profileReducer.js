import { addPost, updateText } from './common/storeFunctions'
import { reqService } from '../api/api';

const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    postData: [
        { message: 'Ooooh Its kazashka! I love!' },
        { message: 'Very nice!' }
    ],
    newPostText: '',
    profile: [],
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return addPost(state);
        case 'UPDATE-TEXT':
            return updateText(action.text, state);
        case SET_PROFILE:
            return {
                ...state, profile: action.property
            }
        default:
            return state;
    }
}

export const setProfile = (property) => {
    return { type: SET_PROFILE, property }
}

export const getProfileThunkCreator = (userId) =>
    (dispatch) => {
        reqService.getProfileId(userId).then(response => {
            dispatch(setProfile(response.data))
        });
    }