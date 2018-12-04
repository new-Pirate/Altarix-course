import React, { Component } from 'react';
import UserMessage from './UserMessage.jsx';
import * as ReactDOM from 'react-dom';

class Chatroom extends Component {
    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        const { messList } = this.refs;
        const scrollHeightList = messList.scrollHeight;
        const height = messList.clientHeight;
        const maxScrollTop = scrollHeightList - height;
        ReactDOM.findDOMNode(messList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    render() {
        const { messages } = this.props;
        return (
            <div className="chatroom" ref="messList">
                <ul className="list">
                    {messages.map((mess) => <UserMessage key={mess.id} mess={mess} />)}
                </ul>
            </div>
        )
    }
}

export default Chatroom;