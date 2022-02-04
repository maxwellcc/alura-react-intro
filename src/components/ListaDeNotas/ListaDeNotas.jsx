import React, {Component} from 'react';
import CardNota from "../CardNota";
import "./estilo.css"

class ListaDeNotas extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota/>
                        </li>
                    )
                })}
            </ul>

        )
    };
}

export default ListaDeNotas;