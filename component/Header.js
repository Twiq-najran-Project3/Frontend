// import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Header.module.css'
import axios from 'axios';
import { useEffect,useState } from 'react'
import{Container,Navbar,Nav} from "react-bootstrap"

export default function Header() {
  const [user, setUser] = useState([]);
  useEffect( () => {
    const token = JSON.parse(localStorage.getItem("token"))
    axios.get(`http://localhost:5000/user/getUserByID`,
    {
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).then(response =>{
      console.log(response.data);
      setUser(response.data)

    }).catch(err =>{
      console.log(err.response.data)
    })
  }, []);

    return (
         
        <div>
  <Navbar className={styles.bg}  expand="lg" fixed=''>
  <Container>
    <Navbar.Brand href="/">Events</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/events">Events</Nav.Link>
        <Nav.Link></Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
     
      
         {/* <Nav.Link   onClick={() => {
    localStorage.removeItem("token");
  }}href="/login">Logout</Nav.Link> */}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
