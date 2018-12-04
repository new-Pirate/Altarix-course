import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import Chatroom from './Chatroom.jsx';
import MessageForm from './MessageForm.jsx';
import { db } from './firebase.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const messagesRef = db.ref('messages');
    messagesRef.on('value', (snapshot) => {
      this.setState({
        messages: Object.values(snapshot.val())
      });
    });
  }

  sendMessage = (e) => {
    const now = Date.now();
    const message = {
      id: now,
      name: "Alex Vin",
      text: e,
      outGoingMess: true,
    };
    db.ref(`/messages/${now}`).set(message);
  }

  render() {
    return (
      <div className="App">
        <Header chatName="Incognito" />
        <Chatroom messages={this.state.messages} />
        <MessageForm sendMessage={this.sendMessage} />
      </div>
    )
  }
}

export default App;