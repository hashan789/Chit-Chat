import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uid } from 'uuid'

export default function Login({ onIdSubmit }) {

    const idRef = useRef()

    const home_url = 'https://i.pinimg.com/564x/c0/d6/3e/c0d63e388e9290964ff1a393764faa43.jpg'
    const video_url = "https://pin.it/3cUoQQUdM"

    function handleSubmit(e){
        e.preventDefault()
    
        onIdSubmit(idRef.current.value)
    }

    function createNewId(){
        onIdSubmit(uid())
    }

    return (
        <div className="d-flex align-items-center justify-content-center border">
           <div style={{ width: '30vw', height: '100vh',backgroundSize: 'contain'}}>
              <video style={{ width: '100vw', height: '100vh',backgroundSize: 'contain'}}>
                 <source src={video_url} type="video/mp4">
              </video>
           </div>
          <div style={{ width: '50vw' , marginLeft: '50px' }}>
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
        </div>
    )
}
