/* eslint-disable max-len */
import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { MDCSnackbar } from '@material/snackbar';
import Sistema from '../../dominio/sistema.mjs';
import * as moment from 'moment';

window.addEventListener('load', inicio);
const sistema = new Sistema();
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
// Usuarios hardcodeados
const usuario1 = sistema.registrarUsuario(
  'test@test.com',
  '1234',
  'pepe',
  'grillo',
);
sistema.agregarUsuario(usuario1);
const usuario2 = sistema.registrarUsuario(
  'test2@test.com',
  '1234',
  'mickey',
  'mouse',
);
sistema.agregarUsuario(usuario2);

// Mes y año actual
let mesSeleccionado = (new Date()).getMonth();
let añoSeleccionado = (new Date()).getFullYear();
// Listado de meses para mostrar por UI.
const nombresMes = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

/**
 * Función que maneja los eventos de la aplicación
 * Muestra/oculta secciones y maneja eventos click de los botones.
 */
function inicio() {
  mostrarInterfazLogin();
  document.getElementById('lbutton').addEventListener('click', login);
  document.getElementById('cbutton').addEventListener('click', crearUsuario);
  document.getElementById('mes-seleccionado').innerText = nombresMes[mesSeleccionado] + ' ' + añoSeleccionado;
  document.getElementById('btn-logout').addEventListener('click', logout);
  document.getElementById('mes-anterior').addEventListener('click', cargarMesAnterior);
  document.getElementById('mes-siguiente').addEventListener('click', cargarMesSiguiente);
  document.getElementById('gbutton').addEventListener('click', agregarGasto);
}
/**
 * Muestra las secciones para iniciar sesión y registrar usuario.
 */
function mostrarInterfazLogin() {
  tabBar.activateTab(0);
  // cargarGastosMes();
  document.getElementById('tab-lista-gastos').classList.add('sample-content--hidden');
  document.getElementById('selector-mes').style.display = 'none';
  document.getElementById('logout-sitio').style.display = 'none';
  document.getElementById('btn-add-gasto').style.display = 'none';
  document.getElementById('content-home').style.display = 'none';
}
/**
 * Muestra las secciones para registrar gastos y visualizar
 * listado de gastos por mes.
 */
function mostrarInterfazHome() {
  cargarMesActual();
  tabBar.activateTab(2);
  document.getElementById('tab-iniciar-sesion').classList.add('sample-content--hidden');
  document.getElementById('tab-crear-usuario').classList.add('sample-content--hidden');
  document.getElementById('tab-lista-gastos').classList.remove('sample-content--hidden');
  document.getElementById('tab-lista-gastos').classList.remove('sample-content--hidden');
  document.getElementById('selector-mes').style.display = 'flex';
  document.getElementById('logout-sitio').style.display = 'inline';
  document.getElementById('btn-add-gasto').style.display = 'inline';
  document.getElementById('content-home').style.display = 'inline';
}
// function cargarGastosMes() {
//   const listaGastosDelMes = sistema.obtenerGastosDeUsuario();
// }
/**
 * Inicio de sesión.
 * Si los datos son válidos el usario ingresa a la aplicación,
 * sino recibe un error.
 */
function login() {
  // sistema.registrarGasto('gasto prueba 1', 333, new Date(), 0, '');
  // sistema.registrarGasto('gasto prueba 2', 1999, new Date(), 0, '');
  // sistema.registrarGasto('gasto prueba 5', 38400, new Date(), 0, '');
  const usuario = document.getElementById('luser').value;
  const password = document.getElementById('lpassword').value;
  let mensaje;
  if (loginform.reportValidity()) {
    mensaje = sistema.loginUsuario(usuario, password);
  } else {
    mensaje = 'Por favor complete todos los campos';
  }
  alert(mensaje);
  if (mensaje === '¡Bienvenido!') {
    mostrarInterfazHome();
  }
}
/**
 * Funcion para tomar datos del form de registro y pasrlos
 * a la función registrar usuario de Sistema.
 * Muestra un mensaje si se registró (o no) con éxito.
 */
function crearUsuario() {
  if (fcreateuser.reportValidity()) {
    let mensaje;
    const nombre = document.getElementById('cnombre').value;
    const apellido = document.getElementById('capellido').value;
    const email = document.getElementById('cemail').value;
    const password = document.getElementById('cpassword').value;
    const repetirPassword = document.getElementById('rcpassword').value;
    if (password != repetirPassword) {
      mensaje = 'Las contraseñas deben conincidir';
    } else {
      mensaje = sistema.registrarUsuario(email, password, nombre, apellido);
    }
    alert(mensaje);
    if (mensaje === '¡El usuario fue creado correctamente!') {
      tabBar.activateTab(0);
      document.getElementById('fcreateuser').reset();
    }
  }
}
/**
 * Cierra sesión y oculta secciones del sitio que deben ser visibles
 * solo cuando el usaurio esta logueado.
 */
function logout() {
  // Actualiza el id del usuario logueado
  sistema.usuarioLogueado = 0;
  // Oculta contenido del home.
  document.getElementById('tab-lista-gastos').classList.add('sample-content--hidden');
  document.getElementById('selector-mes').style.display = 'none';
  document.getElementById('logout-sitio').style.display = 'none';
  document.getElementById('btn-add-gasto').style.display = 'none';
  document.getElementById('content-home').style.display = 'none';
  // Mostrar contenido del login
  tabBar.activateTab(0);
  document.getElementById('tab-iniciar-sesion').classList.remove('sample-content--hidden');
  document.getElementById('tab-crear-usuario').classList.remove('sample-content--hidden');
}

/**
 * Carga la información para el mes anterior al actualmente seleccionado.
 */
function cargarMesActual() {
  mesSeleccionado = (new Date()).getMonth();
  añoSeleccionado = (new Date()).getFullYear();
  document.getElementById('mes-seleccionado').innerText = nombresMes[mesSeleccionado] + ' ' + añoSeleccionado;
  cargarGastosMes();
}
/**
 * Carga la información para el mes anterior al actualmente seleccionado.
 */
function cargarMesAnterior() {
  if (mesSeleccionado === 0) {
    mesSeleccionado = 11;
    añoSeleccionado--;
  } else {
    mesSeleccionado--;
  }
  document.getElementById('mes-seleccionado').innerText = nombresMes[mesSeleccionado] + ' ' + añoSeleccionado;
  cargarGastosMes();
}
/**
 * Carga la información para el mes siguiente al actualmente seleccionado.
 */
function cargarMesSiguiente() {
  if (mesSeleccionado === 11) {
    mesSeleccionado = 0;
    añoSeleccionado++;
  } else {
    mesSeleccionado++;
  }
  document.getElementById('mes-seleccionado').innerText = nombresMes[mesSeleccionado] + ' ' + añoSeleccionado;
  cargarGastosMes();
}
/**
 * Carga la lista de gastos para el mes seleccionado y año seleccionados.
 */
function cargarGastosMes() {
  const listaGastosDelMes = sistema.obtenerGastosDelMes(mesSeleccionado, añoSeleccionado);
  if (listaGastosDelMes.length != 0) {
    cargarListadoGastosMes(listaGastosDelMes);
    document.getElementById('listadoGastosVacio').style.display = 'none';
    document.getElementById('listadoGastosMes').style.display = 'inline';
  } else {
    document.getElementById('listadoGastosVacio').style.display = 'inline';
    // document.getElementById('listadoGastosMes').style.display = 'none';
  }
}
/**
 * Recibe una lista de gastos para mostara en la UI.
 * Carga cada gasto en una línea del listado.
 * @param {Gasto[]} listado Lista de gastos a cargar.
 */
function cargarListadoGastosMes(listado) {
  // Si el listado no es vacío, lo recorre y agrega cada uno de los gastos a la lista.
  if (listado.length != 0) {
    let totalMes = 0;
    // Obtiene mes y día.
    let dia = listado[0].fecha.getDate();
    const mes = nombresMes[listado[0].fecha.getMonth()];
    // Obtiene el nodo padre de la lista.
    const nodoListado = document.getElementById('listadoGastosMes');
    // Carga el subheader h3 y la ul a la que se le agregan li como hijos.
    let elementoSubheader = 'h3';
    let texto = mes + ' ' + dia;
    agregarSubheaderListaGastos(nodoListado, elementoSubheader, texto);
    elementoSubheader = 'ul';
    let nodoPadreListItems = agregarSubheaderListaGastos(nodoListado, elementoSubheader, texto);
    // Se recorre la lista de gastos.
    listado.forEach((gasto) => {
      if (gasto.fecha.getDate() != dia) {
        // Si es un día nuevo, crea nuevo sub-header para el día
        // y lo agrega como hijo a la lista principal.
        dia = gasto.fecha.getDate();
        elementoSubheader = 'h3';
        texto = mes + ' ' + dia;
        agregarSubheaderListaGastos(nodoListado, elementoSubheader, texto);
        // Luego crea una nueva ul para el día y lo agrega como hijo al sub-header del día.
        // Todos los gastos de un mismo día se cargan en esta ul.
        elementoSubheader = 'ul';
        nodoPadreListItems = agregarSubheaderListaGastos(nodoListado, elementoSubheader, texto);
      }
      // Crea un list item y lo agrega al nodo padre de la lista (ul).
      crearListItem(nodoPadreListItems, icono, nombreGasto, montoGasto);
      // Suma al monto total del mes el monto del gasto que agregó.
      totalMes = totalMes + gasto.monto;
    });
  }
}
/**
 * Agrega un elemento subheader como hijo a un nodo lista y lo retorna.
 * @param {HTMLElement} nodoListado Nodo padre de la lista.
 * @param {string} elementoSubheader Tipo de elemento a agregar como hijo de la lista
 * @param {string} texto Texto a mostrar al usuario.
 * @return {HTMLElement} Retorna el nodo creado.
 */
function agregarSubheaderListaGastos(nodoListado, elementoSubheader, texto) {
  // Crea el nuevo elemento subheader.
  const nuevoSubheader = document.createElement(elementoSubheader);
  // Si es el nombre del subheader, le agrega el texto recibido.
  // Sino, no le agrega texto ya que es un ul.
  // Se agregan clases a la class list del nodo.
  if (elementoSubheader === 'h3') {
    nuevoSubheader.innerText = texto;
    nuevoSubheader.classList.add('mdc-list-group__subheader');
  } else {
    nuevoSubheader.classList.add('mdc-list');
  }
  // Agrega el nuevo nodo subheader a la lista padre.
  nodoListado.appendChild(nuevoSubheader);
  return nuevoSubheader;
}
/**
 * Crea un li con los datos de un gasto y lo agrega a la lista.
 * @param {HTMLElement} nodoPadre Nodo al que se agrega el li como hijo.
 * @param {string} icono Nombre del ícono de material design.
 * @param {string} nombreGasto Nombre del gasto.
 * @param {Number} montoGasto Monto del gasto.
 */
function crearListItem(nodoPadre, icono, nombreGasto, montoGasto) {
  // Crea los li para cada día, con sus detalles (nombre, monto, ícono).
  const lineaDelDia = document.createElement('li');
  lineaDelDia.classList.add('mdc-list-item');
  // Crea span para el ícono y lo agrega al padre.
  const spanIcono = document.createElement('span');
  spanIcono.classList.add('material-icons mdc-list--icon-list');
  // spanIcono.innerText = sistema.obtenerIconoCategoria(gasto.categoria);
  spanIcono.innerText = icono;
  lineaDelDia.appendChild(spanIcono);
  // Crea span para el efecto ripple y lo agrega al padre.
  const spanRipple = document.createElement('span');
  spanRipple.classList.add('mdc-list-item__ripple');
  lineaDelDia.appendChild(spanRipple);
  // Crea span para el nombre del gasto y lo agrega al padre.
  const spanNombreGasto = document.createElement('span');
  spanNombreGasto.classList.add('mdc-list-item__text');
  spanNombreGasto.innerText = nombreGasto;
  lineaDelDia.appendChild(spanNombreGasto);
  // Crea span para el monto del gasto y lo agrega al padre.
  const spanMonto = document.createElement('span');
  spanMonto.classList.add('mdc-list-item__meta');
  spanMonto.innerText = montoGasto;
  lineaDelDia.appendChild(spanMonto);
  nodoPadre.appendChild(lineaDelDia);
}

document.getElementById('suma-total-mes').innerText = '1.234';

/**
 * Muestra el contenido de la tab activa
 * y oculta el contenido del resto de las tabs.
 */
// function mostrarContentTabActiva() {
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('sample-content--hidden');
    } else {
      element.classList.add('sample-content--hidden');
    }
  });
});
// }

/**
 * Agrega gasto
 */
function agregarGasto() {
  if (fcreategasto.reportValidity()) {
    let mensaje;
    const nombre = document.getElementById('gnombre').value;
    const monto = document.getElementById('gmonto').value;
    const fecha = document.getElementById('gfecha').value;
    const categoria = document.getElementById('categoria').value;
    if (moment(document.getElementById('gfecha').value, 'YYYY-MM-DD', true).isValid() && sistema.validarDatosGasto(nombre, monto)) {
      sistema.registrarGasto(nombre, monto, fecha, categoria);
      alert('Se registro el gasto');
    }
  }
}

