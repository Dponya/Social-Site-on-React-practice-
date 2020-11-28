import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './Profile/Profile';
import DialogueContainer from './Dialogue/DialogueContainer';
/* import Profile from './Profile/Profile'; */

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavigationBar />
        <div className="main">
          <Route path="/dialogs" render={() => <DialogueContainer

          />} />
          <Route path="/profile" render={() => <Profile

          />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;