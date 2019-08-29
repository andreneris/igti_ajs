import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Menu from './template/menu';
import Contato from './contato/contato';
import Routes from './routes';

const App = () => {
  return (
    <>
    <Jumbotron>
      <h1>Olá!</h1>
      <p>
        Trabalho pratico - Agenda
      </p>
    </Jumbotron>
    <Menu/>
    <Routes/>
    </>
  );
};

export default App;
