import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import { BrowserRouter, Route } from 'react-router-dom'
import DialogueContainer from './Dialogue/DialogueContainer';
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import { Login } from './Login/Login';
/* import MSGauthRedirectComponent from './Dialogue/DialogueContainer'; */

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavigationBar />
        <div className="main">
          <Route path="/dialogs" render={() => <DialogueContainer />} />
          {/* <Route path="/dialogs" render={() => <MSGauthRedirectComponent />} /> */}
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;