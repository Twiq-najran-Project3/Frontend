import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Login.module.css";
import axios from "axios"
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/user/login`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .catch((err) => {
        console.log("forbiden");
      });
  };

  return (
    <div>
      <Container className={styles.Container} fluid>
        <Row>
          <Col className={styles.bg} sm>
            SIGN IN
          </Col>s
        </Row>
        <Row className={styles.form}>
          <Col sm={4}>
            <Form className={styles.formBody} onSubmit={(e) => handelSubmit(e)}>
              <Form className={styles.head}>
                <h1>Sign In</h1>
              </Form>
              <Form.Group className={styles.group} controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </Form.Group>
              <button className={styles.btn} type="submit">
                Sign In
              </button>
              <hr/>
              <Row className={styles.downText} >
              <Col >Dont have an account?<Link  href={"/rigester"}>Register now</Link></Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
