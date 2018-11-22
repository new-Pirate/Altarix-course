import React, { Component } from 'react';
import UserMessage from './UserMessage.jsx';

class Chatroom extends Component {
    render() {
        return (
            <div className="chatroom">
                <UserMessage />
            </div>
        )
    }
}

export default Chatroom;