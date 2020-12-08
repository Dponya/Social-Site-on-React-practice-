import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './redux/reduxStore';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);