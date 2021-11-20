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
let mmSeleccionado = (new Date()).getMonth();
let yySeleccionado = (new Date()).getFullYear();
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
  document.getElementById('mes-seleccionado').innerText = nombresMes[mmSeleccionado] + ' ' + yySeleccionado;
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
  document.getElementById('tab-lista-gastos').style.display = 'none';
  document.getElementById('selector-mes').style.display = 'none';
  document.getElementById('btn-logout').style.display = 'none';
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
  mmSeleccionado = (new Date()).getMonth();
  yySeleccionado = (new Date()).getFullYear();
  document.getElementById('mes-seleccionado').innerText = nombresMes[mmSeleccionado] + ' ' + yySeleccionado;
}
/**
 * Carga la información para el mes anterior al actualmente seleccionado.
 */
function cargarMesAnterior() {
  if (mmSeleccionado === 0) {
    mmSeleccionado = 11;
    yySeleccionado--;
  } else {
    mmSeleccionado--;
  }
  document.getElementById('mes-seleccionado').innerText = nombresMes[mmSeleccionado] + ' ' + yySeleccionado;
}
/**
 * Carga la información para el mes siguiente al actualmente seleccionado.
 */
function cargarMesSiguiente() {
  if (mmSeleccionado === 11) {
    mmSeleccionado = 0;
    yySeleccionado++;
  } else {
    mmSeleccionado++;
  }
  document.getElementById('mes-seleccionado').innerText = nombresMes[mmSeleccionado] + ' ' + yySeleccionado;
}

// document.getElementById("tab-iniciar-sesion").style.display = "none";
// document.getElementById("tab-crear-usuario").style.display = "none";
// document.getElementById("tab-lista-gastos").style.display = "none";
// document.getElementById("tabs-login").style.display = "none";
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

