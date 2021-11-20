/* eslint-disable max-len */
let idGasto = 1;
/**
 * Clase que maneja las funciones de los gastos.
 */
export default class Gasto {
  /**
     * Constructor de la clase Gasto.
     * @param {Intger} idGasto id unico del gasto
     * @param {String} nombre Nombre que describe el gasto.
     * @param {String} moneda Moneda en la cual esta el gasto.
     * @param {Number} monto Importe del gasto.
     * @param {Date} fecha Fecha que se realizó el gasto.
     * @param {Number} categoria Una de las categorías del listado de categorías de Sistema.
     * @return {Gasto} Retorna el gasto creado.
     * @param {String} descripcion Descripcion del gasto.
     */
  constructor(idGasto, nombre, moneda, monto, fecha, categoria, repetir, descripcion) {
    this.idGasto = idGasto;
    this.nombre = nombre;
    this.moneda = moneda;
    this.monto = monto;
    this.fecha = fecha;
    this.categoria = categoria;
    this.repetir = repetir;
    this.descripcion = descripcion;
    
    return this;
  }

}
