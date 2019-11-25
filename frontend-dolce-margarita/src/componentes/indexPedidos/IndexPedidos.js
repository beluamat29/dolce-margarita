import React from 'react';
import './indexPedidos.scss';
import servicioPedidos from "../../servicios/ServicioPedidos";
import InformacionPedido from "./pedido/InformacionPedido";
import {estiloEstados, estados} from "../../constantes";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import moment from "moment";
import Select from "react-select";

registerLocale('es', es)

export default class IndexPedidos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pedidosTodos: [],
            pedidosAMostrar: [],
            estadoSeleccionado: null,
            fechaFin: null,
            fechaInicio: null
        }
    }

    componentDidMount() {
        this.reloadPageWith(this.actualizarPedidos);
    }

    reloadPageWith = () => {
        return servicioPedidos.pedidosActuales(this.actualizarPedidos);
    }

    actualizarPedidos = (pedidos) => {
        this.setState({
            pedidosTodos: pedidos,
            pedidosAMostrar: pedidos
        });
    }

    actualizarPedidosAMostrar = (pedidosAMostrar) => {
        this.setState({ pedidosAMostrar });
    }

    filtrarPorNombreCliente = (event) => {
        const pedidosFiltrados = this.state.pedidosTodos.filter((pedido) => pedido.nombre_cliente.includes(event.target.value))
        this.actualizarPedidosAMostrar(pedidosFiltrados);
    }

    filtrarPorEstado = (estado) => {
        servicioPedidos.pedidosPorEstado(estado.value, this.actualizarPedidos)
          .then(() => this.setState({estadoSeleccionado: estado}));
    }

    setearFechaInicio = (date) => {
        this.setState({fechaInicio: date})
        if(this.state.fechaFin) {
            const pedidosPostFecha = this.state.pedidosTodos.filter(pedido => this.esFechaPosterior(pedido.created_at, date) && !this.esFechaPosterior(pedido.created_at, this.state.fechaFin))
            this.setState({pedidosAMostrar: pedidosPostFecha})
        } else {
            const pedidosPostFecha = this.state.pedidosTodos.filter(pedido => this.esFechaPosterior(pedido.created_at, date))
            this.setState({pedidosAMostrar: pedidosPostFecha})
        }

    }

    esFechaPosterior = (fecha_pedido, fechaSeleccionada) => {
        return moment(fecha_pedido).isAfter(fechaSeleccionada);
    }

    setearFechaFin = (date) => {
        this.setState({fechaFin: date})
        if(this.state.fechaInicio){
            const pedidosPreFecha = this.state.pedidosTodos.filter(pedido => this.esFechaPosterior(pedido.created_at, this.state.fechaInicio) && !(this.esFechaPosterior(pedido.created_at, date)))
            this.setState({pedidosAMostrar: pedidosPreFecha})
        } else {
            const pedidosPreFecha = this.state.pedidosTodos.filter(pedido => !(this.esFechaPosterior(pedido.created_at, date)))
            this.setState({pedidosAMostrar: pedidosPreFecha})
        }
    }

    render() {
        return (
            <div className="index-pedidos-home">
                <p className="title is-1 is-spaced">Pedidos</p>
                <div className="container-filtrado">
                    <div className='filtro-container'>
                        <div>
                            <p className='titulo'>Filtrar por fecha</p>
                        </div>

                        <div className='filtros-fecha'>
                            <label className='etiqueta-filtro'>Desde:</label>
                            <div className='filtro'>
                                <DatePicker
                                  locale={'es'}
                                  selected={this.state.fechaInicio}
                                  onSelect={this.setearFechaInicio}
                                  onChange={this.setearFechaInicio}
                                />
                            </div>

                            <label className='etiqueta-filtro'>Hasta:</label>
                            <div className='filtro'>
                                <DatePicker
                                  className={'filtro'}
                                  locale={'es'}
                                  selected={this.state.fechaFin}
                                  onSelect={this.setearFechaFin}
                                  onChange={this.setearFechaFin}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="filtro-container">
                        <div>
                            <p className='titulo'>Filtrar por Cliente</p>
                        </div>
                        <input className="filtro-nombre-cliente" type="text" name="filter" placeholder="Nombre del cliente" onChange={ (event) => this.filtrarPorNombreCliente(event)}/>
                    </div>
                    <div className="filtro-container">
                        <div>
                            <p className='titulo'>Filtrar por estado</p>
                        </div>
                        <div className="filtrado-por-estado">
                            <Select
                              placeholder={this.state.estadoSeleccionado || "Seleccioná un estado"}
                              value={this.state.estadoSeleccionado}
                              onChange={(estadoSeleccionado) => this.filtrarPorEstado(estadoSeleccionado)}
                              options={estados}
                            />
                        </div>
                    </div>
                </div>
                <div className="rows">
                    {this.state.pedidosAMostrar.map(informacionPedido => <InformacionPedido actualizarPedidos={this.actualizarPedidos} pedido={informacionPedido}/>)}
                </div>
            </div>
        )
    }
}
