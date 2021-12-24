import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import img1 from "../public/images/footer1.png";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
        <Container className={styles.footer} fluid>
        <Row sm={6}>
            <Col>
            <Image className={styles.img} src={img1} alt="Picture of the author" /> </Col>
            <Col>ddd</Col>
            <hr/>
        {/* <Col >
          <h3 className={styles.text}>Events</h3>
        </Col> */}
      </Row>
        </Container>
    
    </div>
  );
}
