import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/reduxStore'

let rerender = (state) => {
    ReactDOM.render(
        <Provider store={store}>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </Provider>,
        document.getElementById('root')
    );
};

rerender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerender(state);
});