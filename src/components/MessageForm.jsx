import React, { Component } from 'react';

class MessageForm extends Component {
    render() {
        return (
            <form className="messageForm">
                <textarea type="text" className="messageFormArea" placeholder="write a message..."></textarea>
                <button className="messageFormButton">Send</button>
            </form>
        )
    }
}

export default MessageForm;