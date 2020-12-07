import { reqService } from '../api/api'

const SET_AUTH = 'SET-AUTH';
const SET_LOGIN = 'SET-LOGIN'

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
            }
        case SET_LOGIN:
            return {
                ...state,
                isAuthorized: action.auth
            }
        default:
            return state;
    }
}

export const setAuthUserData = (login, email, id, isAuthorized) => {
    return { type: SET_AUTH, data: { login, email, id, isAuthorized } }
}

export const setLoginUserData = (auth) => {
    return { type: SET_LOGIN, auth: { auth } }
}

export const authThunkCreator = () =>
    (dispatch) => {
        reqService.auth().then(response => {
            console.log(response.data.data);
            const { login, email, id } = response.data.data;
            if (!login) {
                return 0;
            }
            else {
                dispatch(setAuthUserData(login, email, id, true))
            }
        });
    }

export const loginhunkCreator = (email, password, rememberMe) =>
    (dispatch) => {
        reqService.login(email, password, rememberMe).then(response => {
            /* if (response.data.resultCode === 0) dispatch(setLoginUserData(true));
            else return 0; */
            if (response.data.resultCode === 0) dispatch(authThunkCreator)
            else return 0;
        });
    }