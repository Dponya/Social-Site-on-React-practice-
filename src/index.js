import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/reduxStore';

ReactDOM.render(
    <Provider store={store}>
        <App
            store={store}
        />
    </Provider>,
    document.getElementById('root')
);