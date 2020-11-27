import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './Profile/Profile';
import DialogueContainer from './Dialogue/DialogueContainer';
/* import Profile from './Profile/Profile'; */

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavigationBar state={props.state.friendDetails} />
        <div className="main">
          <Route path="/dialogs" render={() => <DialogueContainer store={props.store}

          />} />
          <Route path="/profile" render={() => <Profile
            store={props.store}
          />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;