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
          <div className="d-flex mx-auto">
            <div className="d-flex mx-auto">
                <h6><b style={{ fontSize : '50px' }}>Chit Chat</b></h6>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex align-items-center mx-auto">
                    <Form.Label style={{width:'200px'}}>Enter your Id</Form.Label>
                     <div style={{width:'750px',marginLeft:'20px'}}>
                       <Form.Control type="text" ref={idRef} style={{width:'600px'}} required/>
                       <Button type="submit" className="m-4">Login</Button>
                       <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
                     </div>
                </Form.Group>
            </Form>
            </div>
        </Container>
    )
}
