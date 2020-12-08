import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import { Route, withRouter } from 'react-router-dom'
import DialogueContainer from './Dialogue/DialogueContainer';
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import Loader from './common/Loader';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { setInizilizeAppThunkCreator } from '../redux/app-reducer'

class App extends React.Component {
  componentDidMount() {
    this.props.setInizilizeAppThunkCreator()
  }

  render() {
    if (this.props.inizilized) {
      return (
        <div>
          <div className="app-wrapper">
            <HeaderContainer />
            <NavigationBar />
            <div className="main">
              <Route path="/dialogs" render={() => <DialogueContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </div>
      )
    }
    else if (this.props.inizilized === false) {
      return (
        <Loader />
      )
    }
  }

}

let mapStateToProps = (state) => {
  return {
    inizilized: state.app.inizilized,
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps, { setInizilizeAppThunkCreator }),
)(App) 