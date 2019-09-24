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
    //Se usa como valor default para cuando arranca el dropdown
    value: 'chocolatenulo', label: 'Selecciona tu chocolate'
}

export default class CargaDeDatos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formatoSeleccionado: chocolateNulo,
            nombre: "",
            precio: "",
            descripcion: "",
            imagen: "",
            peso: "",
            tamaño:""
        }
    }

    agregarNombre = (event) => {
        this.setState({ nombre: event.target.value })
    }

    agregarPrecio = (event) => {
        this.setState({ precio: event.target.value })
    }

    agregarDescripcion = (event) => {
        this.setState({ descripcion: event.target.value })
    }

    agregarImagen = (event) => {
        this.setState({ imagen: event.target.value })
    }

    agregarPeso = (event) => {
        this.setState({ peso: event.target.value })
    }

    agregarTamaño = (event) => {
        this.setState({ tamaño: event.target.value })
    }

    renderCampo = (campo, actualizarCampo) => {
        return (
            <div className="field">
                <p className="subtitle is-4 is-spaced"> {campo} </p>
                <div className="control">
                    <input className="input is-primary" type="text" onChange={ actualizarCampo } />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="home-carga-de-datos ">
                <div>
                    <p className="title is-1 is-spaced">Carga de datos</p>
                </div>

                <div className="field">
                    <p className="subtitle is-4 is-spaced">Formato del producto</p>
                    <div className="control">
                        <Select className="formato-chocolate-selector"
                            value={this.state.formatoSeleccionado}
                            onChange={(formato) => this.setState({formatoSeleccionado: formato})}
                            options={tiposDeFormato}
                        />
                    </div>
                </div>

                {
                    this.renderCampo("Nombre", this.agregarNombre)
                }

                {
                    this.renderCampo("Precio", this.agregarPrecio)
                }

                {
                    this.renderCampo("Imagen", this.agregarImagen)
                }

                {
                    this.state.formatoSeleccionado.value !== 'huevo' &&
                    this.renderCampo("Peso", this.agregarPeso)
                }

                {
                    this.state.formatoSeleccionado.value === 'huevo' &&
                    this.renderCampo("Tamaño", this.agregarTamaño)
                }

                <div className="field">
                    <p className="subtitle is-4 is-spaced">Descripción</p>
                    <div className="control">
                        <textarea className="textarea is-primary" type="text" onChange={ this.agregarDescripcion }/>
                    </div>
                </div>

                {
                    this.state.formatoSeleccionado.value === 'huevo' &&
                    <RellenoDeParedesDeHuevoCheckbox/>
                }

                <a className="button is-danger">Cargar Producto</a>
            </div>
        )
    }
}