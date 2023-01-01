import React from 'react'
import { useChatbox } from '../contexts/ChatboxProvider'
import Chat from './Chat'
import Sidebar from './Sidebar'

export default function Dashboard({ id }) {
  
  const { selectedChatbox } = useChatbox()
  
  return (
        <div className="d-flex">
          <Sidebar id={id}/>
          {selectedChatbox && <Chat />}
        </div>
    )
}
