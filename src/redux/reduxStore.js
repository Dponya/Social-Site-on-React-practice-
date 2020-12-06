import { combineReducers, createStore, applyMiddleware } from 'redux';
import { profileReducer } from './profileReducer';
import { dialogueReducer } from './dialogueReducer';
import { navigatorReducer } from './navigatorReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    usersDetails: usersReducer,
    profileDetails: profileReducer,
    dialogueDetails: dialogueReducer,
    friendDetails: navigatorReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;