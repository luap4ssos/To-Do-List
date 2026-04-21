import { useRef, useState } from "react";
import Botao from "./components/Button";

export default function App() {
  const [contador, setContador] = useState(0);
  const [atividade, setAtividade] = useState("");
  const [atividades, setAtividades] = useState([]);
  const proximoId = useRef(1);

  function incrementar() {
    setContador(contador + 1);
  }

  function atualizarAtividade(atividade) {
    setAtividade(atividade);
  }

  function adicionarAtividade() {
    if (atividade.trim() === "") return;

    const novaAtividade = {
      id: proximoId.current++,
      texto: atividade,
      feita: false,
    };

    setAtividades([...atividades, novaAtividade]);
    setAtividade("");
  }

  function removerAtividade(id) {
    setAtividades(atividades.filter((item) => item.id !== id));
  }

  function toggleFeita(id) {
    setAtividades(
      atividades.map((item) =>
        item.id === id ? { ...item, feita: !item.feita } : item
      )
    );
  }

  return (
    <div className="todo-app">
      <h1>Lista Atividades</h1>

      <ul>
        {atividades.map((atv) => (
          <li key={atv.id}>
            <label>
              <input
                type="checkbox"
                checked={atv.feita}
                onChange={() => toggleFeita(atv.id)}
              />
              <span style={{ textDecoration: atv.feita ? "line-through" : "none" }}>
                {atv.texto}
              </span>
            </label>{" "}
            <Botao onClick={() => removerAtividade(atv.id)}>Remover</Botao>
          </li>
        ))}
      </ul>

      <label>Insira Atividade</label>
      <input
        type="text"
        value={atividade}
        onChange={(evento) => atualizarAtividade(evento.target.value)}
      />
      <p>Atividade Inserida: {atividade}</p>
      <Botao onClick={adicionarAtividade}>Adicionar à Lista</Botao>

      <p>valor do meu contador {contador}</p>
      <Botao onClick={incrementar}>Clicar</Botao>
    </div>
  );
}
