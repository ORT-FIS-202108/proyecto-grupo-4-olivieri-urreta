/**
 * Clase Sistema de la aplicación.
 * Esta clase es el único punto de entrada para la lógica de negocio
 * de la aplicación. La interfaz sólo utiliza funciones de esta clase.
 */
export default class Sistema {
  /**
   * Constructor de la clase Sistema.
   * Crea una instancia de la clase.
   */
  constructor() {
    this.usuarios = [];
    this.registros = [];
  }
  /**
   * Registro de usuario.
   * Recibe un usuario y contraseña e intenta crear un usuario.
   * @param {string} usuario nombre de usuario ingresado.
   * @param {string} password contraseña ingresada.
   * @return {boolean} retorna true si se pudo registrar, y false si no.
   */
  registroUsuario(usuario, password) {
    return true;
  }
  /**
   * Login de usuario
   * Recibe el nombre de usuario y contraseña y valida si son correctos.
   * Si son correctos redirige al home del sitio, sino muestra mensaje de error.
   * @param {string} usuario nombre de usuario ingresado.
   * @param {string} password contraseña ingresada.
   * @return {boolean} True si datos son correctos, false si son incorrectos.
   */
  iniciarSesion(usuario, password) {
    return true;
  }
  /**
   * Registro de Gastos/Ingresos
   * Recibe un importe, tipo, la fecha, categoria,
   * y si es recurrente o no. Retorna si se pudo guardar o no el registro.
   * @param {int} importe importe del registro.
   * @param {bool} tipo determina si el registro es un gasto o un ingreso.
   * @param {date} fecha fecha del registro.
   * @param {int} categoria enumerado con la categoría del registro.
   */
  registrarGastoIngreso(importe, tipo, fecha, categoria) {

  }
}
