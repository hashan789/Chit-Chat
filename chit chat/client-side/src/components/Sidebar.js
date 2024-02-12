import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Chatbox from './Chatbox'
import Contacts from './Contacts'
import NewChat from './NewChat'
import NewContact from './NewContact'

const CHAT_KEY = "chatbox"
const CONTACTS_KEY = "contacts"

export default function Sidebar({ id }) {

    const [activeKey, setActivekey] = useState(CHAT_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const chatOpen = activeKey === CHAT_KEY

    function closeModal(){
        setModalOpen(false)
    }

    return (
        <div>
        <div style={{ width:'250px' }} className="border d-flex flex-column m-4">
            <Tab.Container className="border" activeKey={activeKey} onSelect={setActivekey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CHAT_KEY} >Chat Box</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="m-3 border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CHAT_KEY}>
                       <Chatbox />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                       <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your Id: <span className="text-muted">{id}</span>
                </div>
                <Button className="rounded-0" onClick={() => setModalOpen(true)}>
                    New {chatOpen ? 'Chatbox' : 'Contact'}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {chatOpen ? <NewChat closeModal={closeModal}/> : <NewContact closeModal={closeModal}/>}
            </Modal>

        </div>
        </div>
    )
}
