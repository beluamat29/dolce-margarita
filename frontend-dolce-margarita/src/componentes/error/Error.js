import React from 'react'
import '../home/homepage.scss';

const volverAlInicio = (history) => {
  history.push('/')
}

export const Error = ({history}) => {
  return(
    <div className="home-usuario">
      <div className="title">Oh no! Parece que hubo un error al crear tu pedido!</div>
      <div className="subtitle">Vuelve a probar mas tarde</div>
      <button className="button is-danger" onClick={() => volverAlInicio(history)}>Volver al Inicio</button>
    </div>
  )
}
