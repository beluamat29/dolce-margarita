import React from 'react';
import './productosARealizar.scss';
import Select from 'react-select';
import servicio from "../servicios/servicio";
import servicioPedidos from "../servicios/ServicioPedidos";

export default class ProductosARealizar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productoACalcular: null,
            tipoDeChocolate: null,
            mostrarErrorPoducto: false,
            productos: [],
            cantidadARealizar: null,
            renderCantidad: false
        }
    }

    componentDidMount() {
        this.reloadPageWith(this.actualizarNombres);
    }

    reloadPageWith = () => {
        servicio.nombresProductos(this.actualizarNombres);
    }

    actualizarNombres = (productos) => {
        const nombresProductos = productos.map(producto =>  ({value: producto.nombre , label: producto.nombre}))
        this.setState({productos: nombresProductos});
    }

    actualizarCantidadARealizar = (cantidad) => {
        let cantidadARealizar = 0;
        cantidad.map(pedido => cantidadARealizar =+ pedido.cantidad);
        this.setState({cantidadARealizar: cantidadARealizar, renderCantidad: true})
    }

    calcularPedido = () => {
       if(!this.state.productoACalcular){
          this.setState({mostrarErrorPoducto: true})
       } else {
           servicioPedidos.pedidosARealizar(this.state.productoACalcular.value, this.state.tipoDeChocolate, this.actualizarCantidadARealizar)
       }
    }

    handleChange = productoACalcular => {
        return this.setState({ productoACalcular: productoACalcular, mostrarErrorPoducto: false });
    }

    elegirTipoChocolate = tipoDeChocolate => {
        this.setState({tipoDeChocolate: tipoDeChocolate.target.value})
    }

    limpiarCampos = () => {
        this.setState({productoACalcular: null, cantidadARealizar: null, renderCantidad: false})
    }

    render() {
        return (
            <div className="productos-a-realizar-home">
                <div className='selector-producto-y-tipo'>
                    <div>
                        <p>Elegí un producto</p>
                        <Select value={this.state.productoACalcular}
                                options={this.state.productos} placeholder={''}
                                onChange={event => this.handleChange(event)}
                        />
                    </div>
                    <div className='tipo-chocolate'>
                        <div className="control">
                            <div className='radio-chocolates'>
                                <input value={'blanco'} type="radio" name="tipochocolate" onChange={(event)=>this.elegirTipoChocolate(event)}/>
                                <p>Blanco</p>
                            </div>
                            <div className='radio-chocolates'>
                                <input value={'semiamargo'} type="radio" name="tipochocolate" onChange={(event)=>this.elegirTipoChocolate(event)}/>
                                <p>Semi Amargo</p>
                            </div>
                            <div className='radio-chocolates'>
                                <input value={'con leche'} type="radio" name="tipochocolate" onChange={(event)=>this.elegirTipoChocolate(event)}/>
                                <p>Con Leche</p>
                            </div>
                        </div>

                        <div className='botones-filtro'>
                            <a className="button is-danger" onClick={() => this.limpiarCampos()}>Limpiar</a>
                            <a className="button is-danger" onClick={() => this.calcularPedido()}>Calcular</a>
                        </div>
                    </div>
                    <div className='error-producto'>
                        {this.state.mostrarErrorPoducto && <p>Por favor, elegi un producto</p>}
                    </div>
                    <div>
                        {this.state.renderCantidad && <h3>Cantidad a Realizar: {this.state.cantidadARealizar}</h3>}
                    </div>
                </div>
            </div>
        )
    }
}
