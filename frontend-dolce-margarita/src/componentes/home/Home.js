import React from 'react';

import './homepage.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-usuario">
                <div className="title">
                    <p className="title is-1 is-spaced">¿Qué vas a llevar hoy?</p>
                </div>

                <div className="cartas">
                    <div className="card">
                        <div className="card-content figuras">
                        </div>
                        <div className="card-footer">
                            <p className="subtitle"> Figuras</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content bombones">
                        </div>
                        <div className="card-footer">
                            <p className="subtitle"> Bomboneria</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content huevos">
                        </div>
                        <div className="card-footer">
                            <p className="subtitle"> Huevos</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}