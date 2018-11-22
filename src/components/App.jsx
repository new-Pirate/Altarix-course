import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import Chatroom from './Chatroom.jsx';
import MessageForm from './MessageForm.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Chatroom />
        <MessageForm />
      </div>
    );
  }
}

export default App;