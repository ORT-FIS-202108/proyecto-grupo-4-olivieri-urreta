import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Sistema from '../../dominio/sistema.mjs';

window.addEventListener('load', carga);
const sistema = new Sistema();

/**
 * Función que maneja los eventos de la aplicación
 * Muestra/oculta secciones y maneja eventos click de los botones.
 */
function carga() {
  document.getElementById('btn-logout').addEventListener('click', logout);
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


// document.getElementById("tab-iniciar-sesion").style.display = "none";
// document.getElementById("tab-crear-usuario").style.display = "none";
// document.getElementById("tab-lista-gastos").style.display = "none";
// document.getElementById("tabs-login").style.display = "none";
document.getElementById("suma-total-mes").innerText = "1.234";

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

/* Creación de sistema */
const sistema = new Sistema();

window.addEventListener('load', inicio);

/* Usuarios hardcodeados */
const usuario1 = new Usuario('test@test.com', '1234', 'pepe', 'grillo');
sistema.agregarUsuario(usuario1);
const usuario2 = new Usuario('test2@test.com', '1234', 'mickey', 'mouse');
sistema.agregarUsuario(usuario2);

/*  Comienzo funciones  */
/**
 * Funciones al cargar la aplicación. Maneja los event listeners
 * para clicks de botón y otras inputs de usuario.
 */
function inicio() {
  document.getElementById('lbutton').addEventListener('click', login);
  document.getElementById('cbutton').addEventListener('click', crearUsuario);
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
    mensaje = 'Por favor complete todos los campos!';
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
