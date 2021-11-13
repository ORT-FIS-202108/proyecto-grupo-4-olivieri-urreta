/* eslint-disable max-len */
import Usuario from './usuario.mjs';

describe('Creación de usuario', () => {
  test('email y password vacíos', () => {
    expect(Usuario.crearUsuario('', '')).toBe(false);
  });
  test('email vacío / password válido', () => {
    expect(Usuario.crearUsuario('', 'pswd1')).toBe(false);
  });
  test('email válido / password vacío', () => {
    expect(Usuario.crearUsuario('abc@mail.com', 'pswd1')).toBe(false);
  });
  test('email válido / password válido', () => {
    expect(Usuario.crearUsuario('abc@mail.com', 'pswd1')).toBe(false);
  });
  test('email inválido / password válido', () => {
    expect(Usuario.crearUsuario('abcmail.com', 'pswd1')).toBe(false);
  });
});

describe('Valdadción de formato email', () => {
  test('email sin @', () => {
    expect(Usuario.validarEmail('abcmail.com')).toBe(false);
  });
  test('email sin punto despues de @', () => {
    expect(Usuario.validarEmail('abc@mailcom')).toBe(false);
  });
  test('email con @ y punto juntos', () => {
    expect(Usuario.validarEmail('abc@.com')).toBe(false);
  });
  test('email sin top-level domain', () => {
    expect(Usuario.validarEmail('abc@mail.')).toBe(false);
  });
});
