import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Peliculas/Index';
import Detalle from "./pages/Peliculas/Detalle";

ReactDOM.render(
   <BrowserRouter>
      <div>
         <Navbar />
         <Redirect from="/" to="/peliculas" exact />
         <Switch>
            <Route path="/peliculas" exact component={Index} />
            <Route path="/peliculas/:id" component={Detalle} />
         </Switch>
      </div>
   </BrowserRouter>,
  document.getElementById('root')
);
