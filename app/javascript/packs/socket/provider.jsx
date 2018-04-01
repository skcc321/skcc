import React, { Component, PropTypes } from 'react';
import { ActionCableProvider } from 'react-actioncable-provider'

const cable = ActionCable.createConsumer('ws://localhost:3333/cable')

export default function Container (props) {
    return (
        <ActionCableProvider cable={cable}>
            <MyApp />
        </ActionCableProvider>
    )
}
