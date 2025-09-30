import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind"; // 👈 agrega esto arriba con los otros imports

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      {/* 🟦 Sección 1: Tarjeta con CSS Global */}
      <h1>Prueba: Tarjeta Global</h1>

       <TarjetaGlobal
        titulo="Tarjeta Global Azul"
        contenido="Esta tarjeta usa estilos definidos en globals.css y un color personalizado."
        color="#3b82f6"
      />

      <TarjetaGlobal
        titulo="Tarjeta sin color"
        contenido="Si no envías color, usa el color por defecto."
      />

      <TarjetaModulo
        nombre="Producto Premium"
        descripcion="Tarjeta con estilo primario."
        categoria="Tecnología"
        tipo="primaria"
      />

      <TarjetaModulo
        nombre="Producto Clásico"
        descripcion="Tarjeta con estilo secundario."
        categoria="Educación"
        tipo="secundaria"
      />

      <TarjetaModulo
        nombre="Producto Éxito"
        descripcion="Tarjeta con estilo de éxito."
        categoria="Salud"
        tipo="exito"
      />
        {/* 🟩 Sección 3: Tarjetas con estilos en línea */}
        <h1>Tarjetas Dinámicas con Inline Styles</h1>

      <TarjetaDinamica
        nombre="Producto Avanzado"
        descripcion="Tarjeta con fondo personalizado."
        colorFondo="#2ecc71"
        textoColor="#fff"
      />

      <TarjetaDinamica
        nombre="Producto Especial"
        descripcion="Otra tarjeta con colores distintos."
        colorFondo="#e74c3c"
        textoColor="#fff"
      />

        {/* 🟣 Sección 4: Tarjetas con Tailwind CSS */}
      <h1>Tarjetas con Tailwind CSS</h1>

      <TarjetaTailwind
  titulo="Producto Moderno"
  descripcion="Diseño limpio con Tailwind CSS."
  imagen="https://via.placeholder.com/300x150"  // 👈 importante: con http(s) y bien escrito
  etiqueta="Nuevo"
/>


      <TarjetaTailwind
        titulo="Producto Destacado"
        descripcion="Otra tarjeta con Tailwind y diseño responsive."
        imagen="https://via.placeholder.com/300x150"
        etiqueta="Popular"
      />
    </main>
  );
}
