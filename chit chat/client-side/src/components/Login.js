import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uid } from 'uuid'

export default function Login({ onIdSubmit }) {

    const idRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
    
        onIdSubmit(idRef.current.value)
    }

    function createNewId(){
        onIdSubmit(uid())
    }

    return (
        <Container className="d-flex align-items-center justify-content-center border p-4" style={{marginTop:'200px'}}>
          <div className="mx-auto">
            <div className="d-flex justify-content-center mx-auto">
                <h6><b style={{ fontSize : '50px' }}>Chit Chat</b></h6>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex align-items-center mx-auto">
                     <div style={{width:'750px'}}>
                       <Form.Label style={{width:'200px'}}>Enter your Id</Form.Label>
                       <Form.Control type="text" ref={idRef} style={{width:'100%'}} required/>
                       <Button type="submit" className="mt-4 mb-4">Login</Button>
                       <Button className="mx-4" onClick={createNewId} variant="secondary">Create A New Id</Button>
                     </div>
                </Form.Group>
            </Form>
            </div>
        </Container>
    )
}
