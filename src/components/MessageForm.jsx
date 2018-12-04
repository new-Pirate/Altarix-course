import React, { Component } from 'react';

class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }

    onMessageSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.content);
        this.setState({
            content: '',
        })
    }

    onMessageChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    }

    render() {
        return (
            <form className="messageForm" onSubmit={this.onMessageSubmit}>
                <textarea type="text" className="messageFormArea" placeholder="write a message..." onChange={this.onMessageChange} value={this.state.content}></textarea>
                <button type="submit" className="messageFormButton">Send</button>
            </form>
        )
    }
}

export default MessageForm;