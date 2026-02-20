export const PositionItem = () => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}>
      <h3>Posiciones</h3>

      <input
        type="text"
        placeholder="Ingresar url del repositorio"
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button>Enviar</button>
    </div>
  );
};
