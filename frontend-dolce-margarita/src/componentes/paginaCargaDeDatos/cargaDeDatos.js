import React from 'react';
import './cargaDeDatos.scss';
import Select from 'react-select';
import {RellenoDeParedesDeHuevoCheckbox} from "./RellenoDeParedesDeHuevoCheckbox";
import servicioCarga from "../../servicios/ServicioCargaProducto"
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//EXTRAER A UN ARCHIVO DE CONSTANTES
const tiposDeFormato = [
    {value: 'figura', label: 'Figura'},
    {value: 'huevo', label: 'Huevo'},
    {value: 'bomboneria', label: 'Bomboneria'},
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
            imagen: null,
            peso: "",
            tamaño: ""
        }
    }

    agregarNombre = (event) => {
        this.setState({nombre: event.target.value})
    }

    agregarPrecio = (event) => {
        this.setState({precio: event.target.value})
    }

    agregarDescripcion = (event) => {
        this.setState({descripcion: event.target.value})
    }

    agregarImagen = (event) => {
        this.setState({imagen: event.target.value})
    }

    agregarPeso = (event) => {
        this.setState({peso: event.target.value})
    }

    agregarTamaño = (event) => {
        this.setState({tamaño: event.target.value})
    }

    renderCampo = (campo, actualizarCampo) => {
        return (
            <div className="field">
                <p className="subtitle is-4 is-spaced"> {campo} </p>
                <div className="control">
                    <input className="input is-primary" type="text" onChange={actualizarCampo}/>
                </div>
            </div>
        )
    }

    cargarProducto = () => {
        //Deberiamos agregar validaciones para los campos en el frontend
        servicioCarga.cargarProducto(this.state)
    }

    agregarImagen = event => {
        this.setState({imagen: event.target.files[0]})
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

                <div className="field">
                    <p className="subtitle is-4 is-spaced"> Imagen </p>
                    <div className="control image-field">
                        <div className="file is-white">
                            <label className="file-label">
                                <input className="file-input" name='holis' type="file" onChange={this.agregarImagen}/>
                                    <span className="file-cta">
                                      <span className="file-icon">
                                        <FontAwesomeIcon icon={faUpload}/>
                                      </span>
                                      <span className="file-label">
                                        Choose a file…
                                      </span>
                                    </span>
                            </label>
                        </div>
                    </div>
                </div>

                {
                    this.state.formatoSeleccionado.value !== 'huevo' &&
                    this.renderCampo("Peso en gramos", this.agregarPeso)
                }

                {
                    this.state.formatoSeleccionado.value === 'huevo' &&
                    this.renderCampo("Tamaño", this.agregarTamaño)
                }

                <div className="field">
                    <p className="subtitle is-4 is-spaced">Descripción</p>
                    <div className="control">
                        <textarea className="textarea is-primary" type="text" onChange={this.agregarDescripcion}/>
                    </div>
                </div>

                {
                    this.state.formatoSeleccionado.value === 'huevo' &&
                    <RellenoDeParedesDeHuevoCheckbox/>
                }

                <a className="button is-danger" onClick={this.cargarProducto}>Cargar Producto</a>
            </div>
    )
    }
    }