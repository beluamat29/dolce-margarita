import React from 'react';
import './productosARealizar.scss';
import Select from 'react-select';

const options = [
    { value: 'Gallina rellena x230grs', label: 'Gallina rellena x230grs' },
    { value: 'Paleta de conejo x45grs', label: 'Paleta de conejo x45grs' },
    { value: 'Huevo Dinosaurio x340grs', label: 'Huevo Dinosaurio x340grs' },
    { value: 'Gallina rellena x230grs', label: 'Gallina rellena x230grs' },
    { value: 'Paleta de conejo x45grs', label: 'Paleta de conejo x45grs' },
    { value: 'Gallina rellena x230grs', label: 'Gallina rellena x230grs' },
    { value: 'Paleta de conejo x45grs', label: 'Paleta de conejo x45grs' }
];

export default class ProductosARealizar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="productos-a-realizar-home">
                <div className='selector-producto-y-tipo'>
                    <div>
                        <p>Elegí un producto</p>
                        <Select options={options} placeholder={''}/>
                    </div>
                    <div className='tipo-chocolate'>
                        <div className="control">
                            <div className='radio-chocolates'>
                                <input type="radio" name="tipochocolate"/>
                                <p>Blanco</p>
                            </div>
                            <div className='radio-chocolates'>
                                <input type="radio" name="tipochocolate"/>
                                <p>Semi Amargo</p>
                            </div>
                            <div className='radio-chocolates'>
                                <input type="radio" name="tipochocolate"/>
                                <p>Con Leche</p>
                            </div>
                        </div>

                        <div>
                            <a className="button is-danger" onClick={() => this.irAIndexPedidos()}>Calcular</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
