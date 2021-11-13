const sigId = 1; // Contador para asignación de ids.
/**
 * Clase que maneja las funciones de usuarios.
 */
export default class Usuario {
  /**
   * Constructor de la clase Usuario.
   * @param {string} email Identificador único de cada usuario.
   * @param {string} password Contraseña del usuario.
   */
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.idUsuario = sigId++;
  }
  /**
   * Creación de usuario
   * @param {string} email Identificador del usuario.
   * @param {string} password Contraseña del usuario.
   * @return {boolean} Retorna si el usuario se creó o no.
   */
  static crearUsuario(email, password) {
    let usuarioCreado = false;
    if (this.validarEmail(email) && password != '') {
      usuarioCreado = true;
    }
    return usuarioCreado;
  }
  /**
   * Valida el email de usuario
   * @param {string} email Email a validar
   * @return {boolean} Retorna si el string es un email válido.
   */
  static validarEmail(email) {
    let emailValido = false;
    const pattern = /[a-zA-Z0-9\.!$%^&+_-]+@{1}[a-zA-Z0-9]+\.{1}[a-zA-Z0-9]+$/;
    if (email != '' && pattern.test(email)) {
      emailValido = true;
    }
    return emailValido;
  }
}
