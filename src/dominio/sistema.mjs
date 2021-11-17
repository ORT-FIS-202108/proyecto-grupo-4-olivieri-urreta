/* eslint-disable max-len */
import Gasto from './gasto.mjs';
import Usuario from './usuario.mjs';

/**
 * Clase Sistema de la aplicación.
 * Esta clase es el único punto de entrada para la lógica de negocio
 * de la aplicación. La interfaz sólo utiliza funciones de esta clase.
 */
export default class Sistema {
  /**
   * Constructor de la clase Sistema.
   */
  constructor() {
    this.usuarios = []; // Lista de usuario registrados.
    this.gastos = []; // Lista de gastos
    this.gastosParaRepetir = []; // Lista de gastos que se repiten en una determinada fecha.
    this.usuarioLogueado; // Usuario que está utilizando la aplicación.
  }
  /**
   * Registro de usuario.
   * Recibe un usuario y contraseña e intenta crear un usuario.
   * @param {string} email Identificador único (email) de usuario ingresado.
   * @param {string} password Contraseña ingresada.
   * @return {boolean} Retorna true si se pudo registrar, y false si no.
   */
  registroUsuario(email, password) {
    const mensaje = Usuario.validarDatosUsuario(email, password);
    if (mensaje === 'Datos válidos') {
      const usuario = new Usuario(usuario, password);
      this.agregarUsuario(usuario);
      mensaje = 'Usuario creado.';
    }
    return mensaje;
  }
  /**
   * Agrega un usuario a la lista de usuarios.
   * @param {Usuario} usuario Usuario a agregar en la lista.
   */
  agregarUsuario(usuario) {
    this.usuarios.push(usuario);
  }
  /**
   * Login de usuario
   * Recibe el nombre de usuario y contraseña y valida si son correctos.
   * Si son correctos redirige al home del sitio, sino muestra mensaje de error.
   * @param {string} usuario Nombre de usuario ingresado.
   * @param {string} password Contraseña ingresada.
   * @return {boolean} True si datos son correctos, false si son incorrectos.
   */
  iniciarSesion(usuario, password) {
    this.usuarioLogueado = this.obtenerIdUsuario(usuario);
    return true;
  }
  /**
   * Registro de Gastos/Ingresos
   * Recibe un importe, tipo, la fecha, categoria,
   * y si es recurrente o no. Retorna si se pudo guardar o no el registro.
   * @param {string} nombre Nombre del gasto.
   * @param {Number} monto Importe del gasto.
   * @param {date} fecha Fecha del registro.
   * @param {Number} categoria Enumerado con la categoría del registro.
   * @param {string} repetir Determina si el gasto es recurrente
   * y cada cuanto tiempo se repite {unico, semanal, quincenal, mensual, anual}.
   * @return {string} Retorna 'Gasto guardado' si se pudo guardar,
   * sino retorna el error evitó que se guardara el gasto.
   */
  registrarGasto(nombre, monto, fecha, categoria, repetir) {
    const validacionDatos = Gasto.validarDatos(nombre, monto);
    let mensaje = 'Gasto guardado';
    if (validacionDatos === 'Datos válidos') {
      if (typeof fecha.getMonth != 'function') {
        fecha = new Date();
      }
      if (categoria < 0 || categoria > 6) {
        categoria = 0;
      }
      const gasto = new Gasto(nombre, monto, fecha, categoria, this.usuarioLogueado);
      this.gastos.push(gasto);
      const pattern = /^(semanal|quincenal|mensual|anual)$/;
      if (pattern.test(repetir)) {
        this.agregarGastoParaRepetir(gasto.id, repetir);
      }
    } else {
      mensaje = validacionDatos;
    }
    return mensaje;
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
        case 'semanal':
          fecha.setDate(fecha.getDate() + 7);
          break;
        case 'quincenal':
          fecha.setDate(fecha.getDate() + 15);
          break;
        case 'mensual':
          if (fecha.getDate() === 31) {
            fecha.setMonth(fecha.getMonth() + 2);
            fecha.setDate(0);
          } else {
            fecha.setMonth(fecha.getMonth() + 1);
          }
          break;
        case 'anual':
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
   * Verifica si existe en la listaUsuarios un usuario con el id recibido.
   * @param {Number} idUsuario Id del usuario a verificar.
   * @return {boolean} Retorna si encontró o no un usuario con ese id.
   */
  existeUsuario(idUsuario) {
    let existe = false;
    for (let i = 0; i < this.usuarios.length && !existe; i++) {
      if (this.usuarios[i].id === idUsuario) {
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
