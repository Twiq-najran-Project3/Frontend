import React from "react";
import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Rigester.module.css";
import { Row, Col, Form, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Rigester() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const router=useRouter();

  const handelSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/user/rigester`, {
        firstName,
        lastName,
        email,
        userName,
        password,
        phoneNumber,

      })
      .then((res) => {
       console.log(res.data);
       router.push('/login')
      })
      .catch((err) => {
        console.log("forbiden");
      });
  };
  return (
    <div>
      <Container fluid>
      <Row>
          <Col className={styles.bg} sm>
            REGISTER 
          </Col>
        </Row>
        <Form className={styles.formBody} onSubmit={(e) => handelSubmit(e)}>
          <Row  className="justify-content-md-center">
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" onChange={(e) => {
                    setFirstName(e.target.value);
                  }} placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                
                 placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" 
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="User Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row  className="justify-content-md-center">
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" 
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                placeholder="Mobile" />
              </Form.Group>
            </Col>
          </Row>
               
          <button className={styles.btn} type="submit">
            Create Acoount
          </button>
          <hr/>
          <Row className={styles.downText} >
              <Col >ALready have account?|<Link  href={"/login"}>Sign In now</Link></Col>
              </Row>
        </Form>
      </Container>
    </div>
  );
}
