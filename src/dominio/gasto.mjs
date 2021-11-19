/* eslint-disable max-len */
let proxId = 1; // Contador para el próximo Id.
/**
 * Clase que maneja las funciones de los gastos.
 */
export default class Gasto {
  /**
     * Constructor de la clase Gasto.
     * @param {string} nombre Nombre que describe el gasto.
     * @param {Number} monto Importe del gasto.
     * @param {Date} fecha Fecha que se realizó el gasto.
     * @param {Number} categoria Una de las categorías del listado de categorías de Sistema.
     * @param {String} email Email del usuario que es utilizado como id del usuario.
     * @return {Gasto} Retorna el gasto creado.
     */
  constructor(nombre, monto, fecha, categoria, email) {
    this.nombre = nombre;
    this.monto = monto;
    this.fecha = fecha;
    this.categoria = categoria;
    this.idusuario = email;
    return this;
  }
  /**
   * Valida los datos ingresados para un gasto.
   * @param {string} nombre Recibe el nombre.
   * @param {Numbre} monto Recibe el monto del gasto.
   * @return {string} Retorna el mensaje 'Datos válidos' si el monto y el nombre son válidos,
   * y sino retorna un mensaje con error.
   */
  static validarDatos(nombre, monto) {
    let mensaje = 'Datos válidos';
    if (isNaN(monto) || monto <= 0) {
      mensaje = 'El monto ingresado no es válido. Ingrese un número mayor que 0.';
    }
    if (nombre.length < 2) {
      mensaje = 'El nombre ingresado no es válido. Ingrese un nombre de al menos 2 letras.';
    }
    return mensaje;
  }
}
