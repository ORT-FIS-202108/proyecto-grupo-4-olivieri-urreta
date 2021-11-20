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
    this.usuarioLogueado; // usuario logeado


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
   * Registro de Gastos/Ingresos
   * Recibe un importe, tipo, la fecha, categoria,
   * y si es recurrente o no. Retorna si se pudo guardar o no el registro.
   * @param {string} nombre Nombre del gasto.
   * @param {Number} monto Importe del gasto.
   * @param {date} fecha Fecha del registro.
   * @param {Number} categoria Enumerado con la categoría del registro.
   * @param {string} repetir Determina si el gasto es recurrente
   * y cada cuanto tiempo se repite {unico, semanal, quincenal, mensual, anual}..
   */
  registrarGasto(nombre, moneda, monto, fecha, categoria, repetir, descripcion) {
    //idGasto, nombre, moneda, monto, fecha, categoria, repetir, descripcion
    let idGasto = sistema.Usuario.idGasto;
    const gasto = new Gasto(idGasto, nombre, moneda, monto, fecha, categoria, repetir, descripcion);
    this.usuarioLogueado.gastos.push(gasto);
    if(repetir>0){
      const gastoRecurrente = new Gasto(idGasto, nombre, moneda, monto, fecha, categoria, repetir, descripcion);
      this.usuarioLogueado.gastosParaRepetir.push(gastoRecurrente);
    }
    this.usuario.aumentarIdGasto();
    
  }
  /**
   * Valida los datos ingresados para un gasto.
   * @param {string} nombre Recibe el nombre.
   * @param {Numbre} monto Recibe el monto del gasto.
   * @return {string} Retorna el mensaje 'Datos válidos' si el monto y el nombre son válidos,
   * y sino retorna un mensaje con error.
   */
  validarDatos(nombre, monto) {
    if (isNaN(monto) || monto <= 0 || nombre.length < 1) {
      return false;
    } else {
      return true;
    }
  }


  /**
   * Agrega a la lista de gastos a repetir un gasto, que llegada la fecha se agrega.
   * @param {Number} idGasto Id del gasto a repetir.
   * @param {string} repetir Frecuencia con la que se repite el gasto.
   */
  agregarGastoParaRepetir(idGasto, repetir) {
    if (!this.existeGastoParaRepetir(idGasto)) {
      const fecha = this.obtenerGastoPorId(idGasto).fecha;
      switch (repetir) {
        case 'semanal':
          fecha.setDate(fecha.getDate() + 7);
          break;
        case 'quincenal':
          fecha.setDate(fecha.getDate() + 15);
          break;
        case 'mensual':
          if (fecha.getDate() === 31) {
            fecha.setMonth(fecha.getMonth() + 2);
            fecha.setDate(0);
          } else {
            fecha.setMonth(fecha.getMonth() + 1);
          }
          break;
        case 'anual':
          fecha.setFullYear(fecha.getFullYear() + 1);
          break;
      }
      this.gastosParaRepetir.push({
        idGasto: idGasto,
        fecha: fecha,
      });
    }
  }
  /**
   * Verifica si ya existe en la lista de gastos para repetir, un gasto con el mismo id.
   * @param {Number} idGasto Id del gasto a buscar.
   * @return {boolean} Retorna true si existe, o false si no existe el gasto en la lista gastosParaRepetir
   */
  existeGastoParaRepetir(idGasto) {
    let existe = false;
    for (let i = 0; i < this.gastosParaRepetir.length; i++) {
      if (this.gastosParaRepetir[i].idGasto === idGasto) {
        existe = true;
      }
    }
    return existe;
  }
  /**
   * Recibe un id de usuario y si existe ese usuario en la lista de usuario lo retorna.
   * @param {Number} idGasto Id del usuario a buscar.
   * @return {Usuario} Null si no se encontró el usuario o el usuario si lo encuentra.
   */
  obtenerGastoPorId(idGasto) {
    let gasto = null;
    let existe = false;
    for (let i = 0; i < this.gastos.length && !existe; i++) {
      if (this.gastos[i].id === idGasto) {
        gasto = this.gastos[i];
        existe = true;
      }
    }
    return gasto;
  }



}