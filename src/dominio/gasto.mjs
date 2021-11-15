let proxId = 1; // Contador para el próximo Id.
/**
 * Clase que maneja las funciones de los gastos.
 */
export default class Gasto {
  /**
     * Constructor de la clase Gasto.
     * @param {string} nombre
     * @param {string} descripcion
     * @param {int} monto
     * @param {Date} fecha
     * @param {string} categoria
     */
  constructor(nombre, descripcion, monto, fecha, categoria) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.monto = monto;
    this.fecha = fecha;
    this.categoria = categoria;
    this.id = proxId++;
  }
  /**
   * Valida los datos ingresados para un gasto.
   * @param {Gasto} gasto
   * @return {Gasto}
   */
  validarDatos(gasto) {
    return gasto;
  }
}
