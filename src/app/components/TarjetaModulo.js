import styles from "./TarjetaModulo.module.css";

export default function TarjetaModulo({ nombre, descripcion, categoria, tipo }) {
  // Determinamos la clase según el tipo
  const claseTarjeta = `${styles.tarjeta} ${
    tipo === "primaria"
      ? styles.tarjetaPrimaria
      : tipo === "secundaria"
      ? styles.tarjetaSecundaria
      : tipo === "exito"
      ? styles.tarjetaExito
      : ""
  }`;

  return (
    <div className={claseTarjeta}>
      <div className={styles.encabezado}>
        <h2 className={styles.titulo}>{nombre}</h2>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}
