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
            debugger;
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
    debugger;
    return { type: SET_AUTH, data: { login, email, id } }
}
