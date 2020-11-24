import ReactDOM from 'react-dom';
import App from './components/App';
import state, { addPost, updateText, sendMessage, updateMess } from './redux/state'
import { subscribe } from './redux/state'

let rerender = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateText={updateText} sendMessage={sendMessage} updateMess={updateMess} />,
        document.getElementById('root')
    );
}

subscribe(rerender);

rerender(state);