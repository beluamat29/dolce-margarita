import React from 'react';

import './loginAdmin.scss';

export default class LoginAdmin extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="container home-title-container">
                    <h1 className="title"> ¿Qué vas a cargar?</h1>
                </div>

                <div className="container cards-container">
                    <div className="columns">
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <h1>Figura</h1>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <h1>Huevo</h1>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <h1>Bomboneria</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}