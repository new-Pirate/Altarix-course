import React, { Component } from 'react';
import UserAvatar from '../images/user-avatar.png';

class UserMessage extends Component {
    render() {
        const { mess } = this.props;
        return (
            <li className={(mess.isOutgoing) ? "user mySelf" : "user"}>
                <div className="userInfo">
                    <img className="userAvatar" src={UserAvatar} alt={mess.name} />
                    <div className="userName">{mess.name}</div>
                </div>
                <div className="userMessage">{mess.text}</div>
            </li>
        )
    }
}

export default UserMessage;