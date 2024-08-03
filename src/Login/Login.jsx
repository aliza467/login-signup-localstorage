import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Login = ({onSubmit}) => {
  return (
    <>
    

<Form style={{border:"2px solid black", margin:"60px", padding:"60px", width:"40%", alignItems:"center", borderRadius:"10px", backgroundColor:"#B0C4DE"}}  onSubmit={onSubmit}>
    <p style={{fontSize:"50px", fontWeight:"600"}}>Login</p><br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter Email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check s type="checkbox" label="Remember me" />
        <a   href="/signup">Create an account?</a>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>


    
    </>
  )
}

export default Login