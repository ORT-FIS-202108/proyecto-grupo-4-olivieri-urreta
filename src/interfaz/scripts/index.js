/* eslint-disable max-len */
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Sistema from '../../dominio/sistema.mjs';

// INICIO DEL SITIO

// Event listner para la carga inicial del sitio.
window.addEventListener('load', carga);
// Instancia de Sistema.
const sistema = new Sistema();
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
function carga() {
  document.getElementById('mes-seleccionado').innerText = nombresMes[mmSeleccionado] + ' ' + yySeleccionado;
  document.getElementById('btn-logout').addEventListener('click', logout);
  document.getElementById('mes-anterior').addEventListener('click', cargarMesAnterior);
  document.getElementById('mes-siguiente').addEventListener('click', cargarMesSiguiente);
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
document.getElementById("suma-total-mes").innerText = "1.234";

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

//const textFieldTitle = new MDCTextField(document.getElementById('title'));
//const textFieldYear = new MDCTextField(document.getElementById('year'));
//const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

// const addButton = new MDCRipple(document.getElementById('addButton'));
// addButton.listen('click', () => {
//   let title = textFieldTitle.value;
//   let year = textFieldYear.value;
//   let genre = selectGenre.value;
//   try {
//     let newPelicula = new Pelicula(title, genre, year);
//     listaPeliculas.agregar(newPelicula);
//   } catch (error) {
//     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     snackbar.labelText = error.message;
//     snackbar.open();
//   } finally {
//     let peliculas = listaPeliculas.getPeliculas();
//     console.log(peliculas);
//   }
// })

// *****
