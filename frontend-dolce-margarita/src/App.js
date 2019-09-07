import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import LoginAdmin from "./componentes/loginAdmin/LoginAdmin";
import Home from "./componentes/home/Home";
import CargaDeDatos from "./componentes/paginaCargaDeDatos/cargaDeDatos";
import ListadoDeProductos from "./componentes/listadoDeProductos/ListadoDeProductos";


function App() {
  return (
      <BrowserRouter>
              <Switch>
                  <Route
                      exact
                      path="/"
                      component={Home} />
                  <Route
                      exact
                      path="/adminlogin"
                      component={LoginAdmin} />
                  <Route
                      exact
                      path="/cargadatos"
                      component={CargaDeDatos} />
                  <Route
                      exact
                      path="/listado"
                      component={ListadoDeProductos} />
              </Switch>
      </BrowserRouter>
  );
}

export default App;
