import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Main from './components/template/Main'
import ListaRequerimentos from './components/requerimento/Lista'
import RequerimentosComAtrasos from './components/requerimento/relatorio/ProcuradoriasComAtrasos'

export default props => 
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/requerimentos' component={ListaRequerimentos} />
        <Route path='/procuradorias' component={RequerimentosComAtrasos} />
        <Redirect from='*' to='/' />
    </Switch>