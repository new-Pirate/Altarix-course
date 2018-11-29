import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import Chatroom from './Chatroom.jsx';
import MessageForm from './MessageForm.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: Date.now() - 1,
          name: "Incognito",
          text: "Привет",
          isOutgoing: false,
        },

        {
          id: Date.now() - 2,
          name: "Incognito",
          text: "Как дела с JavaScript?",
          isOutgoing: false,
        },

        {
          id: Date.now() - 3,
          name: "Alex",
          text: "(((",
          isOutgoing: true,
        },

        {
          id: Date.now() - 4,
          name: "Alex",
          text: "Так же как и с React (((",
          isOutgoing: true,
        }
      ]
    }
  }

  sendMessage = (e) => {
    this.setState({
      messages: this.state.messages.concat(
        {
          id: Date.now(),
          name: "Alex",
          text: <p>{e}</p>,
          isOutgoing: true,
        }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Header userName="Incognito" />
        <Chatroom messages={this.state.messages} />
        <MessageForm sendMessage={this.sendMessage} />
      </div>
    )
  }
}

export default App;