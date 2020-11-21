import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import Dialogue from './Dialogue/Dialogue';
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './Profile/Profile';
/* import Profile from './Profile/Profile'; */

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavigationBar />
        <div className="main">
          <Route path="/dialogs" component={Dialogue} />
          <Route path="/profile" component={Profile} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
