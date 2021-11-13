/* eslint-disable max-len */
import Usuario from './usuario.mjs';

describe('Valdadción de email y password', () => {
  test('email y password inválidos', () => {
    expect(Usuario.validarDatosUsuario('abc@@ail.com', '')).toBe(false);
  });
  test('email sin @ / password válido', () => {
    expect(Usuario.validarDatosUsuario('abcmail.com', 'abc')).toBe(false);
  });
  test('email sin punto despues de @ / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mailcom', 'abc')).toBe(false);
  });
  test('email con @ y punto juntos / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@.com', 'abc')).toBe(false);
  });
  test('email sin top-level domain / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.', 'abc')).toBe(false);
  });
  test('email válido / password inválido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.com', '')).toBe(false);
  });
  test('email válido / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.com', 'a')).toBe(false);
  });
});
