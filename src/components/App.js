import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import Dialogue from './Dialogue/Dialogue';
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './Profile/Profile';
/* import Profile from './Profile/Profile'; */

function App(props) {
  let AuthorDialogue = props.authorDialogue;
  let MessageDialogue = props.messageDialogue;
  let PostData = props.postData
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavigationBar />
        <div className="main">
          <Route exact path="/dialogs" component={() => <Dialogue authorDialogue={AuthorDialogue} messageDialogue={MessageDialogue} />} />
          <Route path="/profile" component={() => <Profile postData={PostData} />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
