import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useChatbox } from '../contexts/ChatboxProvider'

export default function Chat() {

    const [text, setText] = useState('')
    const setRef = useCallback(node => {
        if(node){
           node.scrollIntoView({ smooth: true })
        }
    },[])
    const { sendMessage, selectedChatbox } = useChatbox()

    const chatBox_theme = "https://i.pinimg.com/564x/ff/ad/f0/ffadf0b3239ef04ff0dd059293b6d391.jpg"

    function handleSubmit(e){
        e.preventDefault()

        sendMessage(selectedChatbox.recipients.map(r => r.id),text)
        setText('')
     }

    return (
        <div className="d-flex flex-column flex-grow-1">
           <div className="flex-grow-1 overflow-auto" style={{ backgroundImage: `url(${chatBox_theme})`}}>
               <div className="d-flex flex-column align-items-start justify-content-end px-3">
                  {selectedChatbox.messages.map((message,index) => { 

                        const lastMessage = selectedChatbox.messages.length - 1 === index

                        return (
                            <div ref={lastMessage ? setRef : null} key={index} className={`my-1 d-flex flex-column ${message.isFromMe ? 'align-self-end' : ''}`}>
                                 <div className={`rounded px-2 py-1 ${message.isFromMe ? 'bg-primary text-white' : 'border'}`}>
                                     {message.text}
                                 </div>
                                 <div className={`text-muted small ${message.isFromMe ? 'text-right' : ''}`}>
                                     {message.isFromMe ? 'you' : message.senderName}
                                 </div>
                            </div>
                        )
                  })} 
                
               </div>
                
           </div>
           <Form onSubmit={handleSubmit}>
               <Form.Group className="m-2">
                   <InputGroup>
                     <Form.Control as="textarea" required value={text} onChange={e => setText(e.target.value)} style={{height: '75px',resize:'none'}}/>
                     <Button type="submit" >Send</Button>
                   </InputGroup>
               </Form.Group>
           </Form>
        </div>
    )
}
