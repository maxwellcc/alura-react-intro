import {ListaDeNotas} from "./components/ListaDeNotas";

function App() {
    return (
        <section>
            <form>
                <input type="text" placeholder="Título"/>
                <textarea placeholder="Escreva sua nota..."/>
                <button>Salvar</button>
            </form>
            <ListaDeNotas />
        </section>
    );
}

export default App;
