import Head from "next/head";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../styles/Home.module.css";
import{Carousel} from "react-bootstrap"
import ALALA from '../public/images/ALALA.jpg'
import winter from '../public/images/winterLand.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={ALALA}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-80"
            src={winter}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr></hr>
    </div>
  );
}
