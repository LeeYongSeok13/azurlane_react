import { Router} from 'react-router-dom';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';


function Navigationbar() {
   
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">AzurLane</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Ship" id='navbarScrollingDropdown'>
                <NavDropdown.Item href="/USS">USS</NavDropdown.Item>
                <NavDropdown.Item href="/HMS">HMS</NavDropdown.Item>
                <NavDropdown.Item href="/IJN">IJN</NavDropdown.Item>
                <NavDropdown.Item href="/KMS">KMS</NavDropdown.Item>
                <NavDropdown.Item href="/ROC">ROC</NavDropdown.Item>
                <NavDropdown.Item href="/RN">RN</NavDropdown.Item>
                <NavDropdown.Item href="/SN">SN</NavDropdown.Item>
                <NavDropdown.Item href="/FFNF">FFNF</NavDropdown.Item>
                <NavDropdown.Item href="/MNF">MNF</NavDropdown.Item>
                <NavDropdown.Item href="/META">META</NavDropdown.Item>
                <NavDropdown.Item href="/기타">기타</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="#equipment">Equipment</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action  
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Navigationbar;