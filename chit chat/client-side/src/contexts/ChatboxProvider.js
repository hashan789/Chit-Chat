import React , { useCallback, useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsContext'
import { useSocket } from './SocketProvider'

const ChatboxMaker = React.createContext()

export function useChatbox(){
    return useContext(ChatboxMaker)
}

export function ChatboxProvider({ id,children }) {

     const [chatbox, setChatbox] = useLocalStorage('chatbox',[])
     const [ chatboxIndexs, setChatboxIndexs] = useState(0)
     const { contacts } = useContacts()
     const socket = useSocket()

     function createChatbox(recipients){
         setChatbox(prevChatbox => {
             return [...prevChatbox,{ recipients, messages: [] }]
         })
     }

     const addMessageToChatbox = useCallback(({ recipients, text, sender }) => {
        setChatbox(prevChatbox => {
            let madeChange = false
            const newMessage = { sender, text }
            const newChat = prevChatbox.map(
                chat => {
                    if(arrayEquality(chat.recipients, recipients)){
                        madeChange = true
                        return {
                           ...chat,
                           messages : [...chat.messages, newMessage]
                        }
                    }

                    return chat
                  })

                  if (madeChange){
                     return newChat
                  }
                  else{
                     return [
                         ...prevChatbox,
                         { recipients, messages: [newMessage]}
                     ]
                  }
                }
            )
     }, [setChatbox])

     useEffect(() => {
         if(socket == null) return

         socket.on('receive-message', addMessageToChatbox)

         return () => socket.off('receive-message')
     },[socket, addMessageToChatbox])

     function sendMessage(recipients, text){

        socket.emit('send-message',{ recipients, text })

        addMessageToChatbox({recipients, text, sender : id}) 
     }

     const formattedChatbox = chatbox.map((chat,index) => {
         const recipients = chat.recipients.map(recipient => {
             const contact = contacts.find(contact => {
                 return contact.id === recipient
             })
             const name = (contact && contact.name) || recipient
             return { id: recipient, name }
         })

         const messages = chat.messages.map(message => {
             const contact = contacts.find(contact => {
                 return contact.id === message.sender
             })
             const name = (contact && contact.name) || message.sender
             const isFromMe = id === message.sender
             return { ...message, senderName: name, isFromMe }
         })

         const selected = (index === chatboxIndexs)
         return {...chat,messages,recipients,selected}
     })

     const value = {
         chatbox : formattedChatbox,
         selectedChatbox : formattedChatbox[chatboxIndexs],
         sendMessage,
         selectChatboxIndex : setChatboxIndexs,
         createChatbox
     }

    return (
        <ChatboxMaker.Provider value={value}>
            {children}
        </ChatboxMaker.Provider>
    )
}

function arrayEquality(a,b){

    if(a.length !== b.length) return false

    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })

}
