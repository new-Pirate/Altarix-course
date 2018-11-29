import React, { Component } from 'react';
import UserMessage from './UserMessage.jsx';

class Chatroom extends Component {
    render() {
        const { messages } = this.props;
        return (
            <div className="chatroom">
                <ul className="list">
                    {messages.map((mess) => <UserMessage key={mess.id} mess={mess} />)}
                </ul>
            </div>
        )
    }
}

export default Chatroom;