import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import { BrowserRouter, Route } from 'react-router-dom'
import DialogueContainer from './Dialogue/DialogueContainer';
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavigationBar />
        <div className="main">
          <Route path="/dialogs" render={() => <DialogueContainer />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;