import ReactDOM from 'react-dom';
import App from './components/App';
import { addPost, updateText, sendMessage, updateMess } from './redux/state'

export const rerender = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateText={updateText} sendMessage={sendMessage} updateMess={updateMess} />,
        document.getElementById('root')
    );
}

