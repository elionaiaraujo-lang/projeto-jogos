import { Link } from "react-router-dom";

function JogoCard({ id, nome, genero, empresa, imagem }) {
  return (
    <div style={{
      border: "2px solid white",
      padding: "20px",
      margin: "10px",
      borderRadius: "15px",
      width: "250px",
      textAlign: "center",
      backgroundColor: "#111320",
      boxShadow: "0px 0px 10px rgba(255,255,255,0.2)"
    }}>
      <img
        src={imagem}
        alt={nome}
        title={nome}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "15px"
        }}
      />

      <h3 style={{
        fontSize: "28px",
        marginBottom: "10px"
      }}>
        {nome}
      </h3>

      <p style={{ margin: "5px" }}>
        <strong>Genero:</strong> {genero}
      </p>

      <p style={{ margin: "5px" }}>
        <strong>Empresa:</strong> {empresa}
      </p>

      <Link to={`/${id}`}>
        <button>
          Ver detalhes
        </button>
      </Link>
    </div>
  );
}

export default JogoCard;