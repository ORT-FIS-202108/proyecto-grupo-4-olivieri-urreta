import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Sistema from '../../dominio/sistema.mjs';
import Usuario from '../../dominio/usuario.mjs';

/* Hide - Hidden de crear usuario/ iniciar sesión */

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

/* Creación de sistema */
let sistema = new Sistema();

window.addEventListener('load', inicio);

/* Usuarios hardcodeados */
sistema.registroUsuario('test@test.com', '1234');
sistema.registroUsuario('test2@test.com', '1234');

/*  Comienzo funciones  */

function inicio() {
  
  document.getElementById('lbutton').addEventListener('submit', login, false);
  document.getElementById('cbutton').addEventListener('submit', create, false);
}

function login() {
  let usuario = document.getElementById('luser').value;
  let passwd = document.getElementById('lpassword').value;
  if (loginform.reportValidity()) {    
    if(validarDatosUsuario(usuario, passwd)){
      ;
      alert('Bienvenido!');
      //mostrar el home
    } else{
      alert('El usuario es incorrecto o no existe!');
    }
    
  } else{
    alert('El usuario es incorrecto o no existe!');
  }
}

function create() {   
    if (fcreateuser.reportValidity()) {
    let nombre = document.getElementById('cnombre').value;
    let apellido = document.getElementById('capellido').value;
    let email = document.getElementById('cemail').value;
    let password = document.getElementById('cpassword').value;
    let rpassword = document.getElementById('rcpassword').value;
    if(!existeUsuario(email))
    alert('El usuario fue creado correctamente!');    
    } else{
      alert('El email ya se encuentra registrado!');
    }
  }


