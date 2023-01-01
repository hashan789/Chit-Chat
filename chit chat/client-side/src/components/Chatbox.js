import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useChatbox } from '../contexts/ChatboxProvider'

export default function Chatbox() {

    const { chatbox, selectChatboxIndex } = useChatbox()

    function selectChat(index){
        selectChatboxIndex(index)
    }

    return (
        <ListGroup variant="flush">
            {chatbox.map((chat,index) => (
                <ListGroup.Item key={index} action onClick={() => selectChat(index)} active={chat.selected}>
                    {chat.recipients.map(r => r.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
