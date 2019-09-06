import React from 'react';
import Select from "react-dropdown-select";
import './cargaDeDatos.scss';

export default class CargaDeDatos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tiposDeFormato: [
                {nombreFormato:'Huevo', valorFormato: 'Huevo'},
                {nombreFormato:'Figura', valorFormato: 'Figura'},
                {nombreFormato:'Bomboneria', valorFormato: 'Bomboneria'}
                ],
            formatoSeleccionado: undefined
        }

    }

    render() {
        return (
            <div class="home-carga-de-datos ">

                <div>
                    <p class="title is-1 is-spaced">Carga de datos</p>
                </div>


                <div className="field">
                    <p className="subtitle is-4 is-spaced">formato del producto</p>
                    <div className="control">
                        <Select className="formato-chocolate-selector is-fullwidth" labelField="nombreFormato" valueField="valorFormato"
                                options={this.state.tiposDeFormato}
                                placeholder={''}
                                onChange={(formato) => this.setState({formatoSeleccionado: formato})}
                        />
                    </div>
                </div>

                <div className="field">
                    <p className="subtitle is-4 is-spaced">nombre</p>
                        <div className="control">
                            <input className="input is-primary" type="text"/>
                        </div>
                </div>

                <div className="field">
                    <p className="subtitle is-4 is-spaced">precio</p>
                        <div className="control">
                            <input className="input is-primary" type="text"/>
                        </div>
                </div>

                <div className="field">
                    <p className="subtitle is-4 is-spaced">descripción</p>
                    <div className="control">
                        <input className="textarea is-primary" type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}