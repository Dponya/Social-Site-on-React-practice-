import ReactDOM from 'react-dom';
import App from './components/App';
import { addPost } from './redux/state'


export const rerender = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} />,
        document.getElementById('root')
    );
}

