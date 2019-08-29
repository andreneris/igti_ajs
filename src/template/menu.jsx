import React from 'react';
import {Navbar,Nav, Form, FormControl, Button} from 'react-bootstrap/';


export default class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }
  
  handleSearch(event){
    this.setState({
      search: event.target.value
    })
  }
  
  render(){
    return(
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Agenda</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="pesquisar" onChange={this.handleSearch} className="mr-sm-2" />
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
  }
    
}