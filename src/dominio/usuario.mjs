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
   * Valida datos para la creación de un usuario.
   * @param {string} email Email a validar.
   * @param {string} password Password a validar.
   * @return {boolean} Retorna si el string y el password son válidos.
   */
  static validarDatosUsuario(email, password) {
    let datosValidos = false;
    const pattern = /[a-zA-Z0-9\.!$%^&+_-]+@{1}[a-zA-Z0-9]+\.{1}[a-zA-Z0-9]+$/;
    if (email != '' && pattern.test(email) && password != '' && typeof(email) === 'string' && typeof(password) === 'string') {
      datosValidos = true;
    }
    return datosValidos;
  }
}
