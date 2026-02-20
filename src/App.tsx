import "./App.css";
import { PositionList } from "./components/PositionList";
import { Message } from "./components/ui/Message";
import { useCandidate } from "./hooks/useCandidate";

function App() {
  const email = import.meta.env.VITE_EMAIL;
  const { candidate, loading, error } = useCandidate(email);

  if (loading) return <p>Cargando candidato...</p>;
  if (!candidate) return <p>Error al cargar datos del candidato</p>;

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <Message loading={loading} error={error} loadingText="Cargando...">
        {candidate && (
          <>
            <h1>
              Bienvenido {candidate.firstName} {candidate.lastName}, esta es
              nuestra lista de empleos disponibles
            </h1>
            <PositionList candidate={candidate} />
          </>
        )}
      </Message>
    </div>
  );
}

export default App;
