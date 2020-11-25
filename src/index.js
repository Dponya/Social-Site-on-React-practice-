import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './redux/state'

/* let rerender = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

subscribe(rerender);

store.subscribe.rerender(state); */


let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateText={store.updateText.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
                updateMess={store.updateMess.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerender(store.getState(store.getState()));

store.subscribe(rerender);