/* eslint-disable max-len */
import Sistema from './sistema.mjs';

describe('tests de registroUsuario', () => {
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
