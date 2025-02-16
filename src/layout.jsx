import { Link , Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
    return(
        <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="about" >about</Nav.Link>
            <Nav.Link as={Link} to="contact" >Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* <Link to="home">Home</Link> 
<Link to="About">About</Link> 
<Link to="Contact">Contact</Link> */}

<hr />
<Outlet />
<hr />
esdefytghuijkiugftdrs
        </>
    )
  }
  export default Layout;

