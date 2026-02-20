import { PositionList } from "./components/PositionList";
import { Message } from "./components/ui/Message";
import { Title } from "./components/ui/Title";
import { useCandidate } from "./hooks/useCandidate";

function App() {
  const email = import.meta.env.VITE_EMAIL; // hernan24744@gmail.com
  const { candidate, loading, error } = useCandidate(email);

  if (loading) return <p>Cargando candidato...</p>;
  if (!candidate) return <p>Error al cargar datos del candidato</p>;

  return (
    <div style={{ maxWidth: 1900, margin: "40px auto" }}>
      <Message loading={loading} error={error} loadingText="Cargando...">
        {candidate && (
          <>
            <Title
              title={`Bienvenido ${candidate.firstName} ${candidate.lastName}`}
              subtitle="Esta es nuestra lista de empleos disponibles"
            />
            <PositionList candidate={candidate} />
          </>
        )}
      </Message>
    </div>
  );
}

export default App;
