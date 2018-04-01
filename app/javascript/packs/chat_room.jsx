import React, { Component, PropTypes } from 'react';
import { ActionCableProvider, ActionCable } from 'react-actioncable-provider'

export default class ChatRoom extends React.Component {
    constructor (props)  {
        super(props);

        this.state = {
            messages: []
        };

        this.onReceived = this.onReceived.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onReceived (message) {
        this.setState({
            messages: [
                ...this.state.messages,
                message
            ]
        })
    }

    sendMessage = () => {
        const message = this.refs.newMessage.value
        // Call perform or send
        this.refs.roomChannel.send({
            body: message
        })
    }

    render () {
        return (
            <div>
                <ActionCable ref='roomChannel' channel={{channel: 'WebNotificationsChannel', room: '3'}} onReceived={this.onReceived} />
                <ul>
                    {this.state.messages.map((message) =>
                        <li key={message.id}>{message.body}</li>
                    )}
                </ul>
                <input ref='newMessage' type='text' />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}
