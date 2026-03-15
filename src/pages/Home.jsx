import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: 40 }}>Descubra seus bloqueios emocionais</h1>

      <p
        style={{
          maxWidth: 500,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Responda algumas perguntas rápidas e descubra padrões emocionais que
        podem estar influenciando suas decisões.
      </p>

      <button
        onClick={() => navigate("/test")}
        style={{
          marginTop: 30,
          padding: "14px 28px",
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Começar teste
      </button>
    </div>
  );
}
