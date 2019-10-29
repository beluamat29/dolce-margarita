import React from 'react';
import './productosARealizar.scss';
import Select from 'react-select';

const options = [
    { value: 1, label: 'Gallina rellena x230grs' },
    { value: 2, label: 'Paleta de conejo x45grs' },
    { value: 3, label: 'Huevo Dinosaurio x340grs' },
    { value: 4, label: 'Gallina rellena x230grs' },
    { value: 5, label: 'Paleta de conejo x45grs' },
    { value: 6, label: 'Gallina rellena x230grs' },
    { value: 7, label: 'Paleta de conejo x45grs' }
];

export default class ProductosARealizar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productoACalcular: null,
            tipoDeChocolate: null,
            mostrarErrorPoducto: false
        }
    }

    calcularPedido = () => {
       if(!this.state.productoACalcular){
          this.setState({mostrarErrorPoducto: true})
       } else {
           alert('tu calculo se envio')
       }
    }

    handleChange = productoACalcular => {
        return this.setState({ productoACalcular: productoACalcular, mostrarErrorPoducto: false });
    }

    elegirTipoChocolate = tipoDeChocolate => {
        this.setState({tipoDeChocolate: tipoDeChocolate.target.value})
    }

    render() {
        return (
            <div className="productos-a-realizar-home">
                <div className='selector-producto-y-tipo'>
                    <div>
                        <p>Elegí un producto</p>
                        <Select value={this.state.productoACalcular}
                                options={options} placeholder={''}
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
                                <input value={'semiamargo'} type="radio" name="tipochocolate"/>
                                <p>Semi Amargo</p>
                            </div>
                            <div className='radio-chocolates'>
                                <input value={'con leche'} type="radio" name="tipochocolate"/>
                                <p>Con Leche</p>
                            </div>
                        </div>

                        <div>
                            <a className="button is-danger" onClick={() => this.calcularPedido()}>Calcular</a>
                        </div>
                    </div>
                    <div className='error-producto'>
                        {this.state.mostrarErrorPoducto && <p>Por favor, elegi un producto</p>}
                    </div>
                </div>
            </div>
        )
    }
}
