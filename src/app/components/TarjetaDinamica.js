// components/TarjetaDinamica.js

export default function TarjetaDinamica({ nombre, descripcion, colorFondo, textoColor }) {
  const estiloTarjeta = {
    backgroundColor: colorFondo || "#f0f0f0",
    color: textoColor || "#000",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div style={estiloTarjeta}>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
}
