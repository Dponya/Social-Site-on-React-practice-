import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profileReducer';
import { dialogueReducer } from './dialogueReducer';
import { navigatorReducer } from './navigatorReducer';
const reducers = combineReducers({
    profileDetails: profileReducer,
    dialogueDetails: dialogueReducer,
    friendDetails: navigatorReducer,
});

const store = createStore(reducers);

export default store;