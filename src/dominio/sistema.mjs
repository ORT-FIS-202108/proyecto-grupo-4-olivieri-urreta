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
    this.usuarios = []; // Lista de usuarios registrados.
    this.gastos = []; // Lista de gastos.
    this.gastosParaRepetir = []; // Lista de gastos que se repiten en una determinada fecha.
    this.usuarioLogueado; // Indíce del usuario que está utilizando la aplicación. Si es -1, no hay usuario logueado.
  }
  /**
   * Recibe los datos de usuario nuevo, los valida y si son correctos crear el nuevo usuario.
   * @param {string} email Email del usuario.
   * @param {string} password Contraseña del usuario.
   * @param {string} nombre Nombre del usuario.
   * @param {string}apellido Apellido del usuario.
   * @return {string} Mensaje con resultado del registro. Devuelve el error específico si no se pudo registrar.
   */
  registrarUsuario(email, password, nombre, apellido) {
    let mensaje = '¡El usuario fue creado correctamente!';
    const validacionDatos = Usuario.validarDatosUsuario(email, password);
    if (validacionDatos === 'Datos válidos') {
      if (this.existeUsuario(email)) {
        mensaje = 'El email ya se encuentra registrado';
      } else {
        const usuario = new Usuario(email, password, nombre, apellido);
        this.agregarUsuario(usuario);
      }
    } else {
      mensaje = validacionDatos;
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
   * Verifica si existe en la listaUsuarios un usuario con el email recibido.
   * @param {string} email Email del usuario a verificar.
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
   * Valida los datos ingresados por un usuario para loguearse a la aplicación.
   * @param {string} email Email ingresado por usuario.
   * @param {string} password Contraseña ingresada por usuario.
   * @return {string} Retorna mensaje de bienvenida si datos son válidos,
   * sino un mensaje con el error.
   */
  loginUsuario(email, password) {
    let mensaje = 'Usuario o contraseña incorrectos';
    const indiceUsuario = this.indiceUsuario(email);
    if (this.existeUsuario(indiceUsuario)) {
      if (this.verificarPassword(indiceUsuario, password)) {
        mensaje = '¡Bienvenido!';
        this.usuarioLogueado = indiceUsuario;
      }
    }
    return mensaje;
  }
  /**
   * Devuelve el indice del usuario.
   * @param {string} email email del usuario a verificar.
   * @return {integer} Retorna el indice del usuario, si no existe retorna -1.
   */
  indiceUsuario(email) {
    let existe = -1;
    for (let i = 0; i < this.usuarios.length && existe === -1; i++) {
      if (this.usuarios[i].email === email) {
        existe = i;
      }
    }
    return existe;
  }
  /**
   * Verifica la contraseña del usuario.
   * @param {integer} i recibe el indice para verificar si la contraseña coinicide.
   * @param {string} password recibe la contraseña para verificar si la contraseña coinicide.
   * @return {boolean} Retorna si la contraseña coincide o no.
   */
  verificarPassword(i, password) {
    const resultado = this.usuarios[i].password === password;
    return resultado;
  }
}
