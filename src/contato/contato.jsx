import React from 'react';
import {Form, Col, Row, Button, Card} from 'react-bootstrap'

// export default props =>(
export default class Contato extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      submit: ''
    }
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    console.log(this.state);
    event.preventDefault();
  }

  handleEmailInput(event){

    this.setState({
      email: event.target.value
    })
  }

  handleNameInput(event){
    this.setState({
      name: event.target.value
    })
  }

  render(){
    return (
    <>
      <Card>
          <Card.Header>Novo Contato</Card.Header>    
          <Card.Body as={Row}>
              <Col sm={3}>
              </Col>
              <Col sm={9}>
              <Form onSubmit={this.handleSubmit}>
      
      <Form.Group as={Row} controlId="formNome" >
          <Form.Label column sm={2}>
            Nome
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" onChange={this.handleNameInput} placeholder="Nome" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} controlId="formEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" onChange={this.handleEmailInput} placeholder="Email" />
          </Col>
        </Form.Group>
        
      
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Adicionar Contato</Button>
          </Col>
        </Form.Group>
      </Form>
              </Col>
          </Card.Body>
      </Card>
      
      </>
      )
  }
}