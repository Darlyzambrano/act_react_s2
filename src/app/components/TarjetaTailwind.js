export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded-full">
          {etiqueta}
        </span>
        <h3 className="text-xl font-semibold mt-2">{titulo}</h3>
        <p className="text-gray-600 mt-1">{descripcion}</p>
      </div>
    </div>
  );
}
