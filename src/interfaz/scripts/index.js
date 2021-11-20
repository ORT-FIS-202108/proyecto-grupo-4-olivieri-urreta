/* eslint-disable max-len */
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Sistema from '../../dominio/sistema.mjs';
import * as moment from 'moment';

window.addEventListener('load', inicio);
const sistema = new Sistema();
/* Usuarios hardcodeados */
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
// Mes actual
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
  document.getElementById('lbutton').addEventListener('click', login);
  document.getElementById('cbutton').addEventListener('click', crearUsuario);
  document.getElementById('mes-seleccionado').innerText = nombresMes[mmSeleccionado] + ' ' + yySeleccionado;
  document.getElementById('btn-logout').addEventListener('click', logout);
  document.getElementById('mes-anterior').addEventListener('click', cargarMesAnterior);
  document.getElementById('mes-siguiente').addEventListener('click', cargarMesSiguiente);
  document.getElementById('gbutton').addEventListener('click', agregarGasto);
}
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
    mostrarHome();
  }
}
/**
 * Funcion para tomar datos del form de registro y pasrlos
 * a la función registrar usuario de Sistema.
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

 const topAppBarElement = document.querySelector('.mdc-top-app-bar');
 const topAppBar = new MDCTopAppBar(topAppBarElement);

 const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
 tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
   document.querySelectorAll('.content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
       element.classList.remove('sample-content--hidden');
     } else {
       element.classList.add('sample-content--hidden');
     }
   });
 });

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
    const repetir = document.getElementById('recurrenciaGasto').value;
    if (moment(document.getElementById('gfecha').value, 'YYYY-MM-DD', true).isValid() && sistema.validarDatos(nombre, monto)) {
      sistema.registrarGasto(nombre, monto, fecha, categoria, repetir);
      alert('Se registro el gasto');
    }
  }
}
