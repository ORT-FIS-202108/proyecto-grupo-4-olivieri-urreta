/* eslint-disable max-len */
import Sistema from './sistema.mjs';
import Usuario from './usuario.mjs';

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
