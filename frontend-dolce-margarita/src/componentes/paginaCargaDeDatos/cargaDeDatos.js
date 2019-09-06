import React from 'react';
import './cargaDeDatos.scss';
import Select from 'react-select';

//EXTRAER A UN ARCHIVO DE CONSTANTES
const tiposDeFormato = [
    { value: 'figura', label: 'Figura' },
    { value: 'huevo', label: 'Huevo' },
    { value: 'bomboneria', label: 'Bomboneria' },
];


export default class CargaDeDatos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formatoSeleccionado: null
        }

    }

    probando(formato){
        debugger
        this.setState({formatoSeleccionado: formato})
        console.log(this.state.formatoSeleccionado)
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
                        <Select
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
            </div>
        )
    }
}