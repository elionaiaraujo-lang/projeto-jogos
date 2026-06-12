import { useParams } from "react-router-dom";
import JogoCard from "../componentes/JogoCard/JogoCard";
import jogos from "../componentes/Data/jogos";

function Home() {
  const { id } = useParams();
  const jogoSelecionado = jogos[Number(id) - 1];

  if (id && !jogoSelecionado) {
    return (
      <>
        <h1>Jogo não encontrado</h1>
        <p>Não existe jogo com o número {id}.</p>
      </>
    );
  }

  const jogosParaMostrar = id ? [jogoSelecionado] : jogos;

  return (
    <>
      <h1>JOGOS PC</h1>

      <h2>Total de cards: {jogosParaMostrar.length}</h2>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {jogosParaMostrar.map((jogo, index) => (
          <JogoCard
            key={jogo.id}
            id={jogo.id}
            nome={jogo.nome}
            genero={jogo.genero}
            empresa={jogo.empresa}
            imagem={jogo.imagem}
            prioridade={index === 0}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
