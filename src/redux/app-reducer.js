/* import { stopSubmit } from 'redux-form';
import { reqService } from '../api/api' */
import { authThunkCreator } from '../redux/authReducer'
/* import { setAuthUserData } from "./authReducer"; */

const SET_INIZILIZE = 'SET-INIZILIZE'


let initialState = {
    inizilized: false
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIZILIZE:
            return {
                ...state,
                inizilized: true
            }
        default:
            return state;
    }
}

export const setInizilizeApp = () => {
    return { type: SET_INIZILIZE }
}


export const setInizilizeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(authThunkCreator());
    Promise.all([promise]).then(() => {
        dispatch(setInizilizeApp())
    })
}