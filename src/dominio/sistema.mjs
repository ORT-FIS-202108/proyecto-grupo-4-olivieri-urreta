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
    this.registros = [];
  }
  /**
   * Registro de usuario.
   * Recibe un usuario y contraseña e intenta crear un usuario.
   * @param {string} usuario Nombre de usuario ingresado.
   * @param {string} password Contraseña ingresada.
   * @return {boolean} Retorna true si se pudo registrar, y false si no.
   */
  registroUsuario(usuario, password) {
    return true;
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
    return true;
  }
  /**
   * Registro de Gastos/Ingresos
   * Recibe un importe, tipo, la fecha, categoria,
   * y si es recurrente o no. Retorna si se pudo guardar o no el registro.
   * @param {int} importe Importe del registro.
   * @param {bool} tipo Determina si el registro es un gasto o un ingreso.
   * @param {date} fecha Fecha del registro.
   * @param {int} categoria Enumerado con la categoría del registro.
   * @return {string} Retorna registro exitoso si se pudo guardar, sino
   * retorna el error evitó que se guardara el registro.
   */
  registrarGastoIngreso(importe, tipo, fecha, categoria) {
    return false;
  }
}
