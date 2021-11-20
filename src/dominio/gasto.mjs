/* eslint-disable max-len */
/**
 * Clase que maneja las funciones de los gastos.
 */
export default class Gasto {
  /**
     * Constructor de la clase Gasto.
     * @param {Intger} idGasto id unico del gasto
     * @param {String} nombre Nombre que describe el gasto.
     * @param {Number} monto Importe del gasto.
     * @param {Date} fecha Fecha que se realizó el gasto.
     * @param {Number} categoria Una de las categorías del listado de categorías de Sistema.
     * @return {Gasto} Retorna el gasto creado.
     */
  constructor(idGasto, nombre, monto, fecha, categoria) {
    this.id = idGasto;
    this.nombre = nombre;
    this.monto = monto;
    this.fecha = fecha;
    this.categoria = categoria;
    return this;
  }
  /**
   * Valida los datos ingresados para un gasto.
   * @param {string} nombre Recibe el nombre.
   * @param {Numbre} monto Recibe el monto del gasto.
   * @return {string} Retorna el mensaje 'Datos válidos' si el monto y el nombre son válidos,
   * y sino retorna un mensaje con error.
   */
  static validarDatosGasto(nombre, monto) {
    if (isNaN(monto) || monto <= 0) {
      return 'El monto ingresado no es válido';
    } else if (nombre.length < 1) {
      return 'El nombre ingresado no es válido';
    } else {
      return 'Datos válidos';
    }
  }
}
