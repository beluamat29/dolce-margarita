import React from 'react';

import './homepage.scss';

export default class LoginAdmin extends React.Component {
    render() {
        return (
            <div className="home-usuario">
                <div className="title">
                    <p className="title is-1 is-spaced">¿Qué vas a llevar hoy?</p>
                </div>

                <div className="cartas">
                    <div className="box">
                        <p>carta 1</p>
                    </div>

                    <div className="box">
                        <p>carta 2</p>
                    </div>

                    <div className="box">
                        <p>carta 3</p>
                    </div>
                </div>
            </div>
        )
    }
}