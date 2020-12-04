import { reqService } from '../api/api'

const SET_AUTH = 'SET-AUTH';

let initialState = {
    login: null,
    id: null,
    email: null,
    isAuthorized: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (login, email, id) => {
    return { type: SET_AUTH, data: { login, email, id } }
}

export const authThunkCreator = (us) =>
    (dispatch) => {
        reqService.auth().then(response => {
            const { login, email, id } = response.data.data;
            dispatch(setAuthUserData(login, email, id))
        });
    }