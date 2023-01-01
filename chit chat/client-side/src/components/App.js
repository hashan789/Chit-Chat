import React , { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import Login from "./Login"
import Dashboard from './Dashboard'
import { Container } from 'react-bootstrap'
import { ContactsProvider } from '../contexts/ContactsContext';
import { ChatboxProvider } from '../contexts/ChatboxProvider';
import { SocketProvider } from '../contexts/SocketProvider';

function App() {

  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
    <ContactsProvider>
      <ChatboxProvider id={id}>
        <Dashboard id={id} />
      </ChatboxProvider>
    </ContactsProvider>
    </SocketProvider>
  )

  return (
    <>
        { id ? dashboard : <Login onIdSubmit={setId} /> }
    </>
  )
}

export default App;
