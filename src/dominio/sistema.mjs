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
   * Verifica si existe en la listaUsuarios un usuario con el email recibido.
   * @param {string} email Id del usuario a verificar.
   * @return {boolean} Retorna si encontró o no un usuario con ese email.
   */
    existeUsuario(email) {
      let existe = false;
      for (let i = 0; i < this.usuarios.length && !existe; i++) {
        if (this.usuarios[i].email === email) {
          existe = true;
        }
      }
      return existe;
    }

    /**
   * Devuelve el indice del usuario.
   * @param {string} email email del usuario a verificar.
   * @return {integer} Retorna el indice del usuario, si no existe retorna -1.
   */
     indiceUsuario(email) {
      let existe = -1;
      for (let i = 0; i < this.usuarios.length && !existe; i++) {
        if (this.usuarios[i].email === email) {
          existe = i;
        }
      }
      return existe;
    }

      /**
   * Verifica la contraseña del usuario.
   * @param {integer} indice recibe el indice para verificar si la contraseña coinicide.
   * @param {string} password recibe la contraseña para verificar si la contraseña coinicide.
   * @return {boolean} Retorna si la contraseña coincide o no.
   */
       verificarPass(indice, password) {
        let existe = false;
        if(this.usuarios[indice].password == password){
          existe = true;
        }
        return existe;
      }




}