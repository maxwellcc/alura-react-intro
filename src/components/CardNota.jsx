import React, {Component} from 'react';
import FormularioCadastro from "./FormularioCadastro";
import ListaDeNotas from "./ListaDeNotas";

class CardNota extends Component {
    state = {}

    render() {
        return (
            <ul>
                <li>
                    <section>
                        <header>
                            <h3>Título</h3>
                        </header>
                        <p>Escreva sua nota</p>
                    </section>
                </li>
            </ul>
        )
    }
}

export default CardNota;