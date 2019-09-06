import React from 'react';
import './cargaDeDatos.scss';
import Select from 'react-select';
import {RellenoDeParedesDeHuevoCheckbox} from "./RellenoDeParedesDeHuevoCheckbox";

//EXTRAER A UN ARCHIVO DE CONSTANTES
const tiposDeFormato = [
    { value: 'figura', label: 'Figura' },
    { value: 'huevo', label: 'Huevo' },
    { value: 'bomboneria', label: 'Bomboneria' },
];

const chocolateNulo = {
    value: 'chocolatenulo', label: 'Selecciona tu chocolate'
}

export default class CargaDeDatos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formatoSeleccionado: chocolateNulo
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
                        <Select className="formato-chocolate-selector"
                            value={this.state.formatoSeleccionado}
                            onChange={(formato) => this.setState({formatoSeleccionado: formato})}
                            options={tiposDeFormato}
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

                <RellenoDeParedesDeHuevoCheckbox admiteRelleno={this.state.formatoSeleccionado.value === 'huevo'}/>

            </div>
        )
    }
}