import React from 'react'
import { useChatbox } from '../contexts/ChatboxProvider'
import Chat from './Chat'
import Sidebar from './Sidebar'

export default function Dashboard({ id }) {
  
  const { selectedChatbox } = useChatbox()

  const home_page = 'https://i.pinimg.com/originals/9f/c2/12/9fc2126eec2c0a3876e3f2097af9b983.gif'
  
  return (
        <div className="d-flex" style={{ height : '100vh' }}>
          <div>
            <Sidebar id={id}/>
            <div style=
              {{ maxWidth: '30vw',
              height: '30vh',
              backgroundSize: 'contain', 
              backgroundImage: `url(${home_page})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center'}}
            >
            </div>
            <div className='text-center'>
              <h3><b>Chit Chat</b></h3>
              <p><i>Let's chat!</i></p>
            </div>
          </div>
          {!selectedChatbox ? <div className="d-flexbox align-self-center mx-auto">"No Conversations Here!"</div> : selectedChatbox && <Chat />}
        </div>
    )
}
