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
    this.usuarios = [];
    this.gastos = [];
    this.usuarioLogueado;
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
    if (validacionDatos === 'Datos validos') {
      if ('fecha not a date') {
        fecha = new Date();
      }
      if (categoria < 0 || categoria > 6) {
        categoria = 0;
      }
      if (!repetir.match(/^(unico|semanal|quincenal|mensual|anual)$/)) {
        repetir = unico;
      }
      const gasto = new Gasto(nombre, monto, fecha, categoria, this.usuarioLogueado, repetir);
      this.gastos.push(gasto);
    } else {
      mensaje = validacionDatos;
    }
    return mensaje;
  }
  /**
   * Verifica si existe en la listaUsuarios un usuario con el id recibido.
   * @param {Number} id Id del usuario a verificar.
   * @return {boolean} Retorna si encontró o no un usuario con ese id.
   */
  existeUsuario(id) {
    let existe = false;
    for (let i = 0; i < this.usuarios.length && !existe; i++) {
      if (this.usuarios[i] === id) {
        existe = true;
      }
    }
    return existe;
  }
}
