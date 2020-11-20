import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavigationBar />
      <Profile />
    </div>
  );
}

export default App;
