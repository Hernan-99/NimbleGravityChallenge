import "./App.css";
import { PositionList } from "./components/PositionList";
import { useCandidate } from "./hooks/useCandidate";

function App() {
  const email = import.meta.env.VITE_EMAIL;
  const { candidate, loading } = useCandidate(email);

  if (loading) return <p>Cargando candidato...</p>;
  if (!candidate) return <p>Error al cargar datos del candidato</p>;

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>
        Bienvenido {candidate.firstName} {candidate.lastName}, esta es nuestra
        lista de empleos disponibles
      </h1>
      <PositionList />
    </div>
  );
}

export default App;
