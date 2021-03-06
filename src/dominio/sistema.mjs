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
    this.usuarios = []; // Lista de usuarios registrados.
    this.usuarioLogueado = -1; // Posición del usuario logeado en la lista usuarios
    this.listaCategoriasGasto = ['paid', 'theater_comedy', 'restaurant', 'medical_services', 'handyman', 'local_grocery_store', 'commute'];
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
    if (email != '' && password != '' && indiceUsuario != -1) {
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
    return this.usuarios[i].password === password;
  }
  /**
   * Remueve el índice del usuario logueado.
   */
  logout() {
    this.usuarioLogueado = -1;
  }
  /**
   * Registro de Gastos
   * Recibe un importe, tipo, la fecha, categoria,
   * y si es recurrente o no. Retorna si se pudo guardar o no el registro.
   * @param {string} nombre Nombre del gasto.
   * @param {Number} monto Importe del gasto.
   * @param {date} fecha Fecha del registro.
   * @param {Number} categoria Enumerado con la categoría del registro.
   * @param {string} repetir Determina si el gasto es recurrente
   * @return {string} Retorna un mensaje que informa si se registró el gasto o no.
   * y cada cuanto tiempo se repite {unico, semanal, quincenal, mensual, anual}.
   */
  registrarGasto(nombre, monto, fecha, categoria, repetir) {
    let mensaje = 'No fue posible registrar el gasto';
    if (this.usuarioLogueado != (-1)) {
      mensaje = Gasto.validarDatosGasto(nombre, monto, fecha);
      if (mensaje === 'Datos válidos') {
        const cantCategorias = this.listaCategoriasGasto.length - 1;
        if (categoria < 0 || categoria > cantCategorias) {
          categoria = 0;
        }
        const usuario = this.usuarios[this.usuarioLogueado];
        const idGasto = usuario.proxIdGasto;
        const gasto = new Gasto(idGasto, nombre, monto, fecha, categoria);
        usuario.gastos.push(gasto);
        mensaje = 'Gasto creado con éxito';
        if (repetir > 0) {
          usuario.agregarGastoParaRepetir(gasto.id, repetir);
        }
        usuario.aumentarProxIdGasto();
      }
    }
    return mensaje;
  }
  /**
   * Retorna una lista con los gastos registrados del usuario logueado,
   * que se encuentren en el año y mes indicados (parámetros).
   * @param {Number} mes Mes de los gastos a buscar.
   * @param {Number} año Año de los gastos a buscar.
   * @return {Gasto[]} Lista de gastos para el mes indicado.
   */
  obtenerGastosDelMes(mes, año) {
    const gastosDelUsuario = this.usuarios[this.usuarioLogueado].gastos;
    const listaGastosDelMes = [];
    for (let i = 0; i < gastosDelUsuario.length; i++) {
      const fechaUnGasto = gastosDelUsuario[i].fecha;
      if (fechaUnGasto.getMonth() === mes && fechaUnGasto.getFullYear() === año) {
        listaGastosDelMes.push(gastosDelUsuario[i]);
      }
    }
    listaGastosDelMes.sort((a, b) => {
      return b.fecha - a.fecha;
    });
    return listaGastosDelMes;
  }
  /**
   * Recibe un número de categoría y devuelve el nombre del ícono para esa categoría.
   * @param {Number} posCategoria Posición de la categoría a obtener
   * @return {string} Nombre del ícono de material.
   */
  obtenerNombreIcono(posCategoria) {
    if (posCategoria < this.listaCategoriasGasto.length && posCategoria >= 0) {
      return this.listaCategoriasGasto[posCategoria];
    } else {
      return 'info';
    }
  }
}
