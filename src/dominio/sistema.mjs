/* eslint-disable max-len */

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
    this.usuarioLogueado; // Id del usuario que está utilizando la aplicación. Si es 0, no hay usuario logueado.
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
}