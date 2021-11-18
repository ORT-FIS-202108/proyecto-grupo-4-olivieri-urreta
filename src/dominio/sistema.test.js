/* eslint-disable max-len */
import Sistema from './sistema.mjs';
import Usuario from './usuario.mjs';

describe('Pruebas registro de usuario', () => {
  const sistema = new Sistema();
  test('registro con usuario y password vacios', () => {
    expect(sistema.registrarUsuario('', '', 'pepe', 'grillo')).toBe('El formato del password ingresado no es válido.');
  });
  test('registro con usuario vacio', () => {
    expect(sistema.registrarUsuario('', 'abcd', 'Mickey', 'Mouse')).toBe('El formato del email ingresado no es válido.');
  });
  test('registro con formato de usuario inválido', () => {
    expect(sistema.registrarUsuario('nombreusuario', 'abcd', 'Pato', 'Duck')).toBe('El formato del email ingresado no es válido.');
  });
  test('registro con password vacio', () => {
    expect(sistema.registrarUsuario('user@mail.com', '', 'Daisy', 'Duck')).toBe('El formato del password ingresado no es válido.');
  });
  test('registro de usuario válido', () => {
    expect(sistema.registrarUsuario('user@mail.com', 'abcd', 'Minnie', 'Mouse')).toBe('¡El usuario fue creado correctamente!');
  });
  test('registro con usaurio ya existente', () => {
    expect(sistema.registrarUsuario('user@mail.com', 'fghi', 'Peter', 'Pan')).toBe('El email ya se encuentra registrado');
  });
});

describe('Existe Usuario', () => {
  const sistema = new Sistema();
  const usuario1 = new Usuario('test@test.com', '1234', 'pepe', 'grillo');
  sistema.agregarUsuario(usuario1);

  test('email vacio', () => {
    expect(sistema.existeUsuario('')).toBe(false);
  });
  test('email correcto', () => {
    expect(sistema.existeUsuario('test@test.com')).toBe(true);
  });
  test('email incorrecto', () => {
    expect(sistema.existeUsuario('noexiste@test.com')).toBe(false);
  });
});

describe('Login usuario', () => {
  const sistema = new Sistema();
  sistema.registrarUsuario('mickey@disney.com', 'disney', 'Mickey', 'Mouse');
  test('email vacío', () => {
    expect(sistema.loginUsuario('', 'disney')).toBe('Usuario o contraseña incorrectos');
  });
  test('password vacío', () => {
    expect(sistema.loginUsuario('mickey@disney.com', '')).toBe('Usuario o contraseña incorrectos');
  });
  test('email inválido / password válido', () => {
    expect(sistema.loginUsuario('mickey@@@@@disney.com', 'mickey@disney.com')).toBe('Usuario o contraseña incorrectos');
  });
  test('email válido / password inválido', () => {
    expect(sistema.loginUsuario('mickey@disney.com', 'disneyyyyyy')).toBe('Usuario o contraseña incorrectos');
  });
  test('email y password válidos', () => {
    expect(sistema.loginUsuario('mickey@disney.com', 'disney')).toBe('¡Bienvenido!');
  });
});

describe('Indice Usuario', () => {
  const sistema = new Sistema();
  const usuario1 = new Usuario('test@test.com', '1234', 'pepe', 'grillo');
  sistema.agregarUsuario(usuario1);
  const usuario2 = new Usuario('test2@test.com', '12345', 'mickey', 'mouse');
  sistema.agregarUsuario(usuario2);

  test('email vacio', () => {
    expect(sistema.indiceUsuario('')).toBe(-1);
  });
  test('email correcto indice 1', () => {
    expect(sistema.indiceUsuario('test@test.com')).toBe(0);
  });
  test('email incorrecto', () => {
    expect(sistema.indiceUsuario('noexiste@test.com')).toBe(-1);
  });
  test('email correcto indice 2', () => {
    expect(sistema.indiceUsuario('test2@test.com')).toBe(1);
  });
});

describe('Verificar Contraseña', () => {
  const sistema = new Sistema();
  const usuario1 = new Usuario('test@test.com', '1234', 'pepe', 'grillo');
  sistema.agregarUsuario(usuario1);
  const usuario2 = new Usuario('test2@test.com', '12345', 'mickey', 'mouse');
  sistema.agregarUsuario(usuario2);
  // No se verifica si se ingresa indice incorrecto, o contraseña vacia
  // ya que se verifica antes de llegar a esta función
  test('indice correcto contraseña mal', () => {
    expect(sistema.verificarPassword(0, '4321')).toBe(false);
  });
  test('indice y contraseña correctos', () => {
    expect(sistema.verificarPassword(0, '1234')).toBe(true);
  });
});
