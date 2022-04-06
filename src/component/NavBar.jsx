import React from "react";
import "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap';

function NavBar() {

return (
    <Navbar fixed='top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="brand-text font-weight-light">
            {/* <img src={Logo} className="brand-image img-circle elevation-3" style={{marginTop: -7, marginRight: 7,marginLeft: 20}} width="30" height="30"/>
            <span>  Konteks </span>  */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-bold">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Laporan Bulanan" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/laporan-2018">2018</NavDropdown.Item>
                <NavDropdown.Item href="/laporan-2019">2019</NavDropdown.Item>
                <NavDropdown.Item href="/laporan-2020">2020</NavDropdown.Item>
                <NavDropdown.Item href="/laporan-2021">2021</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pembinaan" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/pembinaan-2018">2018</NavDropdown.Item>
                <NavDropdown.Item href="/pembinaan-2019">2019</NavDropdown.Item>
                <NavDropdown.Item href="/pembinaan-2020">2020</NavDropdown.Item>
                <NavDropdown.Item href="/pembinaan-2021">2021</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Mentoring" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/mentoring-2018">2018</NavDropdown.Item>
                <NavDropdown.Item href="/mentoring-2019">2019</NavDropdown.Item>
                <NavDropdown.Item href="/mentoring-2020">2020</NavDropdown.Item>
                <NavDropdown.Item href="/mentoring-2021">2021</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Capaian" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/capaian-2018">2018</NavDropdown.Item>
                <NavDropdown.Item href="/capaian-2019">2019</NavDropdown.Item>
                <NavDropdown.Item href="/capaian-2020">2020</NavDropdown.Item>
                <NavDropdown.Item href="/capaian-2021">2021</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Status dan Beasiswa" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/status-dan-beasiswa-2018">2018</NavDropdown.Item>
                <NavDropdown.Item href="/status-dan-beasiswa-2019">2019</NavDropdown.Item>
                <NavDropdown.Item href="/status-dan-beasiswa-2020">2020</NavDropdown.Item>
                <NavDropdown.Item href="/status-dan-beasiswa-2021">2021</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
