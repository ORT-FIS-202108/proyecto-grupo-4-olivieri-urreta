import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Sistema from '../../dominio/sistema.mjs';
import Usuario from '../../dominio/usuario.mjs';

/* Hide - Hidden de crear usuario/ iniciar sesión */

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

function inicio() {
  document.getElementById('lbutton').addEventListener('click', login);
  document.getElementById('cbutton').addEventListener('click', crearUsuario);
}

function login() {
  const usuario = document.getElementById('luser').value;
  const passwd = document.getElementById('lpassword').value;
  if (loginform.reportValidity()) {
    let indexUser = indiceUsuario(usuario);
    if (indexUser > -1 && verificarPass(indexUser, passwd)) {
      alert('Bienvenido!');
      // mostrar el home
    } else {
      alert('Usuario o contraseña incorrecto');
    }
  } else {
    alert('Por favor complete todos los campos!');
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
