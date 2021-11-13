/* eslint-disable max-len */
import Sistema from './sistema.mjs';

describe('Registro de usuario', () => {
  const sistema = new Sistema();
  test('registro con usaurio y password vacios', () => {
    expect(sistema.registroUsuario('', '')).toBe(false);
  });
  test('registro con usuario vacio', () => {
    expect(sistema.registroUsuario('', 'abcd')).toBe(false);
  });
  test('registro con formato de usuario inválido', () => {
    expect(sistema.registroUsuario('nombreusuario', 'abcd')).toBe(false);
  });
  test('registro con password vacio', () => {
    expect(sistema.registroUsuario('user@mail.com', '')).toBe(false);
  });
  test('registro válido', () => {
    expect(sistema.registroUsuario('user@mail.com', 'abcd')).toBe(true);
  });
  test('registro con usaurio ya existente', () => {
    expect(sistema.registroUsuario('user@mail.com', 'fghi')).toBe(false);
  });
});

// describe('Creación de usuario', () => {
//   test('email y password vacíos', () => {
//     expect(Usuario.crearUsuario('', '')).toBe(false);
//   });
//   test('email vacío / password válido', () => {
//     expect(Usuario.crearUsuario('', 'pswd1')).toBe(false);
//   });
//   test('email válido / password vacío', () => {
//     expect(Usuario.crearUsuario('abc@mail.com', 'pswd1')).toBe(false);
//   });
//   test('email válido / password válido', () => {
//     expect(Usuario.crearUsuario('abc@mail.com', 'pswd1')).toBe(false);
//   });
//   test('email inválido / password válido', () => {
//     expect(Usuario.crearUsuario('abcmail.com', 'pswd1')).toBe(false);
//   });
// });