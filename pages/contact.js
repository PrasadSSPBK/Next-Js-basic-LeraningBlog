
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Contact.module.css'
import { useState } from 'react';

function Contact () {
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [city,setCity]=useState("")
  const [email,setEmail]=useState("")
  const [desc,setDesc]=useState("")

  const submitForm= async (event) =>{
    event.preventDefault() 
  
    const contactDetails={name,phone,city,email,desc}
    const options={
      method:"POST",
      body:JSON.stringify(contactDetails),
      headers:{
        'Content-Type': 'application/json',
      }
    }
    const response=await fetch("http://localhost:3000/api/contact",options)
  const userData=await response.json()
  console.log(userData)

  }


  const onChangeHandler=(event)=>{

    if(event.target.name==="name"){
      setName(event.target.value)
  }
  if(event.target.name==="phone"){
      setPhone(event.target.value)
  }
  if(event.target.name==="city"){
      setCity(event.target.value)
  }
  if(event.target.name==="email"){
      setEmail(event.target.value)
  }
  if(event.target.name==="desc"){
      setDesc(event.target.value)
  }
  }


  
  return (
    <div className={styles.container} >
     <Form className={styles.form}  onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={onChangeHandler} value={name} type="text" placeholder="Enter Name"  name="name" required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="phone" onChange={onChangeHandler} value={phone} placeholder="Enter Contact Number"  name="phone" required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text"  onChange={onChangeHandler} value={city} placeholder="Enter City" name="city"  required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={onChangeHandler} value={email} name="email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Enter Description"  onChange={onChangeHandler} value={desc}name="desc" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default Contact
