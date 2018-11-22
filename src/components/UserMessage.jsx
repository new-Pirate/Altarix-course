import React, { Component } from 'react';
import UserAvatar from '../images/user-avatar.png';

class UserMessage extends Component {
    render() {
        return (
            <div className="user">
                <div className="userInfo">
                    <img className="userAvatar" src={UserAvatar} alt="Avatar" />
                    <div className="userName">Incognito</div>
                </div>
                <div className="userMessage">
                    sdssdssdssdssdssdssdssdssdssdssdssdssdssdssdssdssdssdssdsdddasdasdadssdssdssdssdsssdssdssdssdsssdssdssdssds
                </div>
            </div>
        )
    }
}

export default UserMessage;