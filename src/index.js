import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const AuthorDialogue = [
  { name: 'Vladislav', id: 1 }, { name: 'Ariksey', id: 2 }
];

const MessageDialogue = [
  { message: 'My Sexy Dodo hmmmmm', id: 1 }, { message: 'Hello world', id: 2 }
];

const PostData = [
  { message: 'Ooooh Its kazashka! I love!' },
  { message: 'Very nice!' }
];

ReactDOM.render(
  <App authorDialogue={AuthorDialogue} messageDialogue={MessageDialogue} postData={PostData} />,
  document.getElementById('root')
);

