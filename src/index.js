import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import CadastroVideo from './pages/cadastro/Video/index';
import CadastroCategoria from './pages/cadastro/Categoria/index';
import Pagina404 from './pages/Pagina404/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path ="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);