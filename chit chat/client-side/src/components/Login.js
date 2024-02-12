import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uid } from 'uuid'

export default function Login({ onIdSubmit }) {

    const idRef = useRef()

    const home_url = 'https://i.pinimg.com/originals/e3/1b/75/e31b752875679b64fce009922f9f0dda.gif'
    const last_img = 'https://i.pinimg.com/564x/ac/4c/b7/ac4cb75d1ee332212a369aebffe2abd4.jpg'
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
           <div style={{ width: '30vw', height: '100vh',backgroundSize: 'contain', backgroundImage: `url(${home_url})`,backgroundRepeat: 'no-repeat',backgroundSize: 'contain',backgroundPosition: 'center'}}>
           </div>
          <div style={{ width: '50vw' , marginLeft: '50px' }}>
            <div className="text-center">
                <h6><b style={{ fontSize : '50px' }}>Chit Chat</b></h6>
                <p><i>Let's chat!</i></p>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex align-items-center justify-content-center mx-auto">
                     <div style={{width:'30vw'}}>
                       <Form.Label style={{width:'200px'}}>Enter your Id</Form.Label>
                       <Form.Control type="text" ref={idRef} style={{width:'100%'}} required/>
                       <Button type="submit" className="mt-4 mb-4">Login</Button>
                       <Button className="mx-4" onClick={createNewId} variant="secondary">Create Account</Button>
                     </div>
                </Form.Group>
            </Form>
            </div>
            <div style={{ width: '30vw', height: '100vh',backgroundSize: 'contain', backgroundImage: `url(${last_img})`,backgroundRepeat: 'no-repeat',backgroundSize: 'contain',backgroundPosition: 'center'}}>
           </div>
        </div>
    )
}
