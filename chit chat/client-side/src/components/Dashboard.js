import React from 'react'
import { useChatbox } from '../contexts/ChatboxProvider'
import Chat from './Chat'
import Sidebar from './Sidebar'

export default function Dashboard({ id }) {
  
  const { selectedChatbox } = useChatbox()
  
  return (
        <div className="d-flex" style={{ height : '100vh' }}>
          <Sidebar id={id}/>
          {selectedChatbox && <Chat />}
        </div>
    )
}
