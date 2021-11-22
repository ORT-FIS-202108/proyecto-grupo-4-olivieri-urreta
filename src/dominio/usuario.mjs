/* eslint-disable max-len */
/**
 * Clase que maneja las funciones de usuarios.
 */
export default class Usuario {
  /**
   * Constructor de la clase Usuario.
   * @param {string} email Identificador único de cada usuario.
   * @param {string} password Contraseña del usuario.
   * @param {string} nombre Nombre del usuario.
   * @param {string} apellido Apellido del usuario.
   * @return {Usuario} Retorna el usuario creado.
   */
  constructor(email, password, nombre, apellido) {
    this.proxIdGasto = 1;
    this.email = email;
    this.password = password;
    this.nombre = nombre;
    this.apellido = apellido;
    this.gastos = [];
    this.gastosParaRepetir = []; // Lista de gastos recurrentes.
    return this;
  }
  /**
   * Valida datos para la creación de un usuario.
   * @param {string} email Email a validar.
   * @param {string} password Password a validar.
   * @return {string} Retorna un mensaje de error si los datos no son válidos.
   */
  static validarDatosUsuario(email, password) {
    let mensaje = 'Datos válidos';
    const pattern = /[a-zA-Z0-9\.!$%^&+_-]+@{1}[a-zA-Z0-9]+\.{1}[a-zA-Z0-9]+$/;
    if (email === '' || !pattern.test(email)) {
      mensaje = 'El formato del email ingresado no es válido.';
    }
    if (password === '') {
      mensaje = 'El formato del password ingresado no es válido.';
    }
    return mensaje;
  }
  /**
   * Aumentar el idGasto.
   */
  aumentarProxIdGasto() {
    this.proxIdGasto = ++this.proxIdGasto;
  }
  /**
   * Agrega a la lista de gastos a repetir un gasto, que llegada la fecha se agrega.
   * @param {Number} idGasto Id del gasto a repetir.
   * @param {string} repetir Frecuencia con la que se repite el gasto.
   */
  agregarGastoParaRepetir(idGasto, repetir) {
    if (!this.existeGastoParaRepetir(idGasto)) {
      const fecha = this.obtenerGastoPorId(idGasto).fecha;
      switch (repetir) {
        case 1: // Semanal
          fecha.setDate(fecha.getDate() + 7);
          break;
        case 2: // Quincenal
          fecha.setDate(fecha.getDate() + 15);
          break;
        case 3: // Mensual
          if (fecha.getDate() === 31) {
            fecha.setMonth(fecha.getMonth() + 2);
            fecha.setDate(0);
          } else {
            fecha.setMonth(fecha.getMonth() + 1);
          }
          break;
        case 4: // Anual
          fecha.setFullYear(fecha.getFullYear() + 1);
          break;
      }
      this.gastosParaRepetir.push({
        idGasto: idGasto,
        fecha: fecha,
      });
    }
  }
  /**
   * Verifica si ya existe en la lista de gastos para repetir, un gasto con el mismo id.
   * @param {Number} idGasto Id del gasto a buscar.
   * @return {boolean} Retorna true si existe, o false si no existe el gasto en la lista gastosParaRepetir
   */
  existeGastoParaRepetir(idGasto) {
    let existe = false;
    for (let i = 0; i < this.gastosParaRepetir.length; i++) {
      if (this.gastosParaRepetir[i].idGasto === idGasto) {
        existe = true;
      }
    }
    return existe;
  }
  /**
   * Recibe un id de usuario y si existe ese usuario en la lista de usuario lo retorna.
   * @param {Number} idGasto Id del usuario a buscar.
   * @return {Usuario} Null si no se encontró el usuario o el usuario si lo encuentra.
   */
  obtenerGastoPorId(idGasto) {
    let gasto = null;
    let existe = false;
    for (let i = 0; i < this.gastos.length && !existe; i++) {
      if (this.gastos[i].id === idGasto) {
        gasto = this.gastos[i];
        existe = true;
      }
    }
    return gasto;
  }
}
