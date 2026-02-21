import { PositionList } from "./components/PositionList";
import { Message } from "./components/ui/Message";
import { Title } from "./components/ui/Title";
import { useCandidate } from "./hooks/useCandidate";

function App() {
  // al ser datos "sensibles" podria dejarlo con el .env pero lo cambio hardcodeo por las dudas que la prueba lo necesite asi
  // const email = import.meta.env.VITE_EMAIL; // hernan24744@gmail.com
  const email = "hernan24744@gmail.com";
  const { candidate, loading, error } = useCandidate(email);

  return (
    <div className="mx-auto px-6 py-10">
      <Message loading={loading} error={error} loadingText="Cargando datos...">
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
