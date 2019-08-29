import React from 'react'
import {Router, Route, Redirect} from 'react-router';
import history from './history';


import Contato from './contato/contato';
import ContatoList from './contato/contatoList'

export default props => (
    <Router history={history}>
        <Route path='/contato' component={Contato}></Route>
        <Route path='/pesquisa' component={ContatoList}></Route>
        <Redirect from='*' to='/menu' />
    </Router>
)