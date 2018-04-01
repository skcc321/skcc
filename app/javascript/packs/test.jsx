import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider, ActionCable } from 'react-actioncable-provider'
import ChatRoom from 'packs/chat_room';

function Container (props) {
    return (
        <div>
            <ActionCableProvider url='ws://localhost:3333/cable'>
                <ChatRoom />
            </ActionCableProvider>
        </div>
    )
}


ReactDOM.render(
    <Container />,
    document.getElementById('container')
);
