import React from 'react';

import './homepage.scss';

const categorias = [
    {nombreCategoria: 'figuras', tituloCarta: 'Figuras'},
    {nombreCategoria: 'bombones', tituloCarta: 'Bombonería'},
    {nombreCategoria: 'huevos', tituloCarta: 'Huevos'}
]
export default class Home extends React.Component {

    renderCarta = (titulo, categoria) => {
        return (
            <div className="card">
                <div className={"card-content " + categoria}/>
                <div className="card-footer">
                    <p className="subtitle">{titulo}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="home-usuario">
                <div className="title">
                    <p className="title is-1 is-spaced">¿Qué vas a llevar hoy?</p>
                </div>

                <div className="cartas">
                    {
                        categorias.map((categoria) => this.renderCarta(categoria.tituloCarta, categoria.nombreCategoria))
                    }
                </div>
            </div>
        )
    }
}