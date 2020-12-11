import { combineReducers, createStore, applyMiddleware } from 'redux';
import { profileReducer } from './profileReducer';
import { dialogueReducer } from './dialogueReducer';
import { navigatorReducer } from './navigatorReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app-reducer';

const reducers = combineReducers({
    usersDetails: usersReducer,
    profileDetails: profileReducer,
    dialogueDetails: dialogueReducer,
    friendDetails: navigatorReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;