import Sistema from '../../dominio/sistema.mjs';

/* Creación de sistema */
let sistema = new Sistema();
window.addEventListener('load', inicio);

/* Usuarios hardcodeados */
sistema.registroUsuario('test@test.com', '1234');
sistema.registroUsuario('test2@test.com', '1234');

/*  Comienzo funciones  */

function inicio() {
  alert('entre en inicio ');
  document.getElementById('lbutton').addEventListener('click', login);
  document.getElementById('cbutton').addEventListener('click', create);
}

function login() {
  let usuario = document.getElementById('luser').value;
  let passwd = document.getElementById('lpassword').value;
  if (loginform.reportValidity() && validarDatosUsuario(usuario, passwd)) {
    window.localStorage.setItem('user', usuario);
    alert('Bienvenido!');
    location.href="home.html";
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
    if()
    alert('Bienvenido!');
    location.href="home.html";
    } else{
      alert('El usuario es incorrecto o no existe!');
    }
  }
