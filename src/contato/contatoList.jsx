import React from 'react';
import {Table} from 'react-bootstrap';

import axios from 'axios';


export default class ContatoList extends React.Component {
    state = {
      pessoas: []
    }
  
     componentDidMount() {
      axios.get(`http://localhost:5001/contacts`,{ 'headers': { 'Authorization': 'teste',
      },"Access-Control-Allow-Origin": "*"  })
        .then(res => {
          const pessoas = res.data.contacts;
          this.setState({ pessoas });
        })
    }

    render(){
      return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pessoas.map(p=>
          <tr>
            <td><img src={p.avatarURL} width="50px" height="50px" /></td>
            <td>{p.name}</td>
            <td>{p.email}</td>
            <td></td>
          </tr>
          )}
        </tbody>
      </Table>    

      )
    }
    
    
  }