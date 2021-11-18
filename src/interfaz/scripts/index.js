import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Sistema from '../../dominio/sistema.mjs';
import Usuario from '../../dominio/usuario.mjs';

window.addEventListener('load', inicio);
const sistema = new Sistema();

window.addEventListener('load', inicio);

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

/*  Comienzo funciones  */
/**
 * Funciones al cargar la aplicación. Maneja los event listeners
 * para clicks de botón y otras inputs de usuario.
 */
function inicio() {
  document.getElementById('lbutton').addEventListener('click', login);
  // document.getElementById('lbutton').addEventListener('click', login);
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
