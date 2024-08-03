import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

  import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = ({onSubmit}) => {
  return (

    <>
    <Form style={{border:"2px solid black", margin:"60px", padding:"60px", width:"40%", alignItems:"center", borderRadius:"10px", backgroundColor:"#B0C4DE"}} onSubmit={onSubmit}>
        <h1>Signup
        </h1><br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to all the statements " />
      </Form.Group>
      <a href="/login">Already have an account?</a><br /><br />
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
     
    </>
    
  )
}

export default Signup