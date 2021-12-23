// import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Header.module.css'

import{Container,Navbar,NavDropdown,Nav} from "react-bootstrap"
export default function Header() {
    return (
        <div>
  <Navbar className={styles.bg}  expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/events">Events</Nav.Link>
        <Nav.Link href="/booking">Booking</Nav.Link>
        <NavDropdown title="Wellcome" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
