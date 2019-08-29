import React from 'react';
import {Navbar,Nav, Form, FormControl, Button} from 'react-bootstrap/';


export default props =>(
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Agenda</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="pesquisar" className="mr-sm-2" />
      <Nav.Link href="#/pesquisa">
      <Button variant="outline-info">Buscar Contato</Button>
      </Nav.Link>
    </Form>    
    <Nav className="mr-auto">
      <Nav.Link variant="outline-info" href="#/contato">Add</Nav.Link>
    </Nav>
  </Navbar>
</>
)