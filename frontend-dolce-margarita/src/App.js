import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect, withRouter} from "react-router-dom";
import LoginAdmin from "./componentes/loginAdmin/LoginAdmin";
import Home from "./componentes/home/Home";
import CargaDeDatos from "./componentes/paginaCargaDeDatos/cargaDeDatos";
import ListadoDeProductos from "./componentes/listadoDeProductos/ListadoDeProductos";
import ConfirmacionDePedido from "./componentes/confirmacionDePedido/ConfirmacionDePedido";
import IndexPedidos from "./componentes/indexPedidos/IndexPedidos";
import PedidosOCargaDeDatos from "./componentes/loginAdmin/PedidosOCargaDeDatos";
import ProductosARealizar from "./productosARealizar/ProductosARealizar";
import Navbar from "./componentes/navbar/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminLogeado: JSON.parse(localStorage.getItem('adminLogeado')) || false,
      moldeSeleccionado: "figuras",
      pedidoActual: {}
    }
  }

  deslogearAdmin = () => {
    this.setState({adminLogeado: false})
    localStorage.setItem('adminLogeado', false)
  }

  adminHasLogged = () => {
    this.setState({adminLogeado: true})
    localStorage.setItem('adminLogeado', true)
  }

    seleccionarMolde = (moldeSeleccionado, irAListado) => {
        this.setState({moldeSeleccionado}, irAListado)
    }

  render() {
    return (
      <BrowserRouter>
        <Navbar
          seleccionarMolde={this.seleccionarMolde}
          adminLogeado={this.state.adminLogeado}
          onSignOut={this.deslogearAdmin}
          onCambioMolde={(molde) => this.setState({moldeSeleccionado: molde})}
          deslogearAdmin={this.props.onSignOut}/>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home seleccionarMolde={this.seleccionarMolde}/>}
          />
          <Route
            exact
            path="/admin-login"
            render={props => <LoginAdmin {...props} onLogin={this.adminHasLogged}/>}
          />
          <Route
            exact
            path="/carga-datos"
            component={CargaDeDatos}
          />
          <Route
            exact
            path="/pedidos"
            component={IndexPedidos}
          />
          <Route
            exact
            path="/productos"
            render={props => <ListadoDeProductos
              moldeSeleccionado={this.state.moldeSeleccionado}
              onConfirm={(pedido) => this.setState({pedidoActual: pedido})}
            />}
          />
          <Route
            exact
            path="/admin-index"
            component={PedidosOCargaDeDatos}
          />

          <Route
            exact
            path="/productos-a-realizar"
            component={ProductosARealizar}
          />

          <Route
            exact
            path="/confirmacion"
            render={props => <ConfirmacionDePedido
              pedido={this.state.pedidoActual} {...props}
            />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
