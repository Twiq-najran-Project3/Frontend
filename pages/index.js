import Head from "next/head";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../styles/Home.module.css";
import{Carousel} from "react-bootstrap"
import ALALA from '../public/images/football.jpg'
import winter from '../public/images/comba.png'
import img3 from '../public/images/safari.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel className={styles.Carousel}>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={ALALA}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-80"
            src={winter}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-80"
            src={img3}
            alt="Second slide"
          />

        </Carousel.Item>
      </Carousel>
      <hr></hr>
    </div>
  );
}
