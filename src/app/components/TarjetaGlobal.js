// components/TarjetaGlobal.js
export default function TarjetaGlobal({ titulo, contenido, color }) {
  return (
    <div className="tarjeta-global" style={{ backgroundColor: color || "#f0f0f0" }}>
      <h2 className="titulo-global">{titulo}</h2>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}

