import React from "react";
import './modalEliminarProducto.scss'
import '../../styles/modal-footer.scss'

export default class ModalEliminarProducto extends React.Component {

    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title title">Cuidado!</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>

                    <section className='modal-card-body'>
                        <p>
                            Estas a punto de borrar un producto. Esta operación no puede deshacerse. ¿Seguro que quieres continuar?
                        </p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button" onClick={this.props.onClose}>Cancelar</button>
                        <button className="button" onClick={this.props.onEliminar}>Eliminar</button>
                    </footer>
                </div>
            </div>

        )
    }
}
