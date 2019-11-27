import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, withRouter} from "react-router-dom";
import LoginAdmin from "./componentes/loginAdmin/LoginAdmin";
import Home from "./componentes/home/Home";
import CargaDeDatos from "./componentes/paginaCargaDeDatos/cargaDeDatos";
import ListadoDeProductos from "./componentes/listadoDeProductos/ListadoDeProductos";
import ConfirmacionDePedido from "./componentes/confirmacionDePedido/ConfirmacionDePedido";
import IndexPedidos from "./componentes/indexPedidos/IndexPedidos";
import PedidosOCargaDeDatos from "./componentes/loginAdmin/PedidosOCargaDeDatos";
import ProductosARealizar from "./productosARealizar/ProductosARealizar";

class App extends React.Component{

    state = {
        moldeSeleccionado: "figuras",
        pedidoActual: {},
        adminLogeado: false,
    }

    seleccionarMolde = (moldeSeleccionado) => {
        this.setState({moldeSeleccionado})
    }

    adminHasLogged = () => {
        this.setState({adminLogeado: true})
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Home seleccionarMolde={this.seleccionarMolde}/>}
                    />
                    <Route
                        exact
                        path="/adminlogin"
                        render={props => <LoginAdmin {...props} onLogin={this.adminHasLogged}/>}
                    />
                    <Route
                        exact
                        path="/cargadatos"
                        component={CargaDeDatos}
                    />
                    <Route
                        exact
                        path="/indexPedidos"
                        component={IndexPedidos}
                    />
                    <Route
                        exact
                        path="/listado"
                        render={props => <ListadoDeProductos
                            adminLogeado={this.state.adminLogeado}
                            moldeSeleccionado={this.state.moldeSeleccionado}
                            onConfirm={(pedido)=>this.setState({pedidoActual: pedido})}
                            onCambioMolde={(molde) => this.setState({moldeSeleccionado: molde})}
                            />}
                    />
                    <Route
                        exact
                        path="/adminindex"
                        component={PedidosOCargaDeDatos}
                    />

                    <Route
                        exact
                        path="/productosarealizar"
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
