import React from "react";
import './modalArmadoDePedido.scss';
import '../../styles/modal-footer.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import servicioEdicionProducto from "../../servicios/ServicioEdicionProducto";


export default class ModalEdicionProducto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id_producto: this.props.producto.id,
            nombreProducto: this.props.producto.nombre,
            pesoEnGramos: this.props.producto.peso_en_gramos,
            precio: this.props.producto.precio,
            descripcion: this.props.producto.descripcion,
            tamanio: this.props.producto.tamanio,
            imagen: null
        }
    }

    esHuevo = () => {
        return this.props.producto.molde === 'huevo'
    }

    agregarImagen = event => {
        this.setState({imagen: event.target.files[0]})
    }

    continuar = () => {
        let producto = {
            id: this.state.id_producto,
            nombre: this.state.nombreProducto,
            precio: this.state.precio,
            peso_en_gramos: this.state.pesoEnGramos,
            tamanio: this.state.tamanio,
            descripcion: this.state.descripcion
        }

        servicioEdicionProducto.editarProducto(producto, this.props.onEdit)
    }

    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title title">Edición de producto</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>

                    <section className="modal-card-body">
                        <p className='subtitle'>Nombre</p>
                        <input className='input is-info'
                               value={this.state.nombreProducto}
                               onChange={(event) => this.setState({nombreProducto: event.target.value})}
                        />

                        <p className='subtitle'>Peso en gramos</p>
                        <input className='input is-info'
                               value={this.state.pesoEnGramos}
                               onChange={(event) => this.setState({pesoEnGramos: event.target.value})}
                        />

                        <p className='subtitle'>Precio</p>
                        <input className='input is-info'
                               value={this.state.precio}
                               onChange={(event) => this.setState({precio: event.target.value})}
                        />

                        <p className='subtitle'>Descripción</p>
                        <textarea className='input is-info'
                               value={this.state.descripcion}
                               onChange={(event) => this.setState({descripcion: event.target.value})}
                        />

                        {this.esHuevo() &&
                        <div>
                            <p className='subtitle'>Tamaño</p>
                            <input className='input is-info'
                                   value={this.state.tamanio}
                                   onChange={(event) => this.setState({tamanio: event.target.value})}
                            />
                        </div>
                        }

                        <div className="control image-field">
                            <div className="file has-name is-boxed is-white">
                                <label className="file-label">
                                    <p className='subtitle'>Imagen</p>
                                    <input className="file-input" type="file" onChange={this.agregarImagen}/>
                                    <span className="file-cta">
                                      <span className="file-icon">
                                        <FontAwesomeIcon icon={faUpload}/>
                                      </span>
                                      <span className="file-label">
                                        Elegí una imagen
                                      </span>
                                      {this.state.imagen && <span>
                                         {this.state.imagen.name || ''}
                                      </span>}
                                    </span>
                                </label>
                            </div>
                        </div>

                    </section>

                    <footer className="modal-card-foot">
                        <button className="button" onClick={this.props.onClose}>Cancelar</button>
                        <button className="button" onClick={this.continuar}>Editar</button>
                    </footer>
                </div>
            </div>

        )
    }
}
