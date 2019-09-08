import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import LoginAdmin from "./componentes/loginAdmin/LoginAdmin";
import Home from "./componentes/home/Home";
import CargaDeDatos from "./componentes/paginaCargaDeDatos/cargaDeDatos";
import ListadoDeProductos from "./componentes/listadoDeProductos/ListadoDeProductos";


class App extends React.Component{

    state = {
        moldeSeleccionado: ""
    }

    seleccionarMolde = (moldeSeleccionado) => {
        this.setState({moldeSeleccionado})
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Home seleccionarMolde={this.seleccionarMolde}/>} />
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
                        render={props => <ListadoDeProductos moldeSeleccionado={this.state.moldeSeleccionado}/>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
