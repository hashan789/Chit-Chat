import React , { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsMaker = React.createContext()

export function useContacts(){
    return useContext(ContactsMaker)
}

export function ContactsProvider({ children }) {

     const [contacts, setContacts] = useLocalStorage('contacts',[])

     function createContact(id, name){
         setContacts(prevContacts => {
             return [...prevContacts,{ id,name }]
         })
     }

    return (
        <ContactsMaker.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsMaker.Provider>
    )
}
