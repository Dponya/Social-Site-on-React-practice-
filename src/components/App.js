import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import Dialogue from './Dialogue/Dialogue';
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './Profile/Profile';
/* import Profile from './Profile/Profile'; */

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavigationBar state={props.state.friendDetails} />
        <div className="main">
          <Route path="/dialogs" render={() => <Dialogue state={props.state.dialogueDetails} sendMessage={props.sendMessage} updateMess={props.updateMess} />} />
          <Route path="/profile" render={() => <Profile
            state={props.state.profileDetails}
            addPost={props.addPost}
            updateText={props.updateText}
          />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;