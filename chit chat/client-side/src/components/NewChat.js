import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsContext'
import { useChatbox } from '../contexts/ChatboxProvider'

export default function NewChat({ closeModal }) {

    const [contactIds,setContactIds] = useState([])
    const { contacts } = useContacts() 
    const { createChatbox } = useChatbox()

    function handleSubmit(e){
        e.preventDefault()

        createChatbox(contactIds)
        closeModal()
    }

    function handleCheckboxChange(contactId){
        setContactIds(prevContactIds => {
            if(prevContactIds.includes(contactId)){
                return prevContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            }
            else{
                return [...prevContactIds, contactId]
            }
        })
    }

    return (
        <div>
        <Modal.Header closeButton>Create Chat</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {contacts.map(contact => (
                    <Form.Group controlId={contact.id} key={contact.id}>
                        <Form.Check type="checkbox" value={contactIds.includes(contact.id)} label={contact.name} onChange={() => handleCheckboxChange(contact.id)} />
                    </Form.Group>
                ))}
               <Button type="submit" className="mt-3">Select</Button>
            </Form>
        </Modal.Body>
    </div>
    )
}
