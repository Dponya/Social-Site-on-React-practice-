import { addPost, updateText } from './common/storeFunctions'
import { reqService } from '../api/api';

const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postData: [
        { message: 'Ooooh Its kazashka! I love!' },
        { message: 'Very nice!' }
    ],
    newPostText: '',
    profile: [],
    status: ''
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
        case SET_STATUS:
            return {
                ...state, status: action.property
            }
        default:
            return state;
    }
}

export const setProfile = (property) => {
    return { type: SET_PROFILE, property }
}

export const setStatus = (property) => {
    return { type: SET_STATUS, property }
}

export const getProfileThunkCreator = (userId) =>
    (dispatch) => {
        reqService.getProfileId(userId).then(response => {
            dispatch(setProfile(response.data))
        });
    }

export const getStatusThunkCreator = (userId) =>
    (dispatch) => {
        reqService.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        });
    }

export const updateStatusThunkCreator = (status) =>
    (dispatch) => {
        reqService.updateStatus(status).then(response => {

            if (response.resultCode === 0)
                dispatch(setStatus(response.data));
        });
    }
