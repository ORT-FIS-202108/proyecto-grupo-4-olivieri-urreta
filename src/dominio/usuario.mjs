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
    this.email = email;
    this.password = password;
    this.nombre = nombre;
    this.apellido = apellido;
    this.gastos = [];
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
}
