/* eslint-disable max-len */
import Usuario from './usuario.mjs';

describe('Valdadción de email y password', () => {
  test('email y password inválidos', () => {
    expect(Usuario.validarDatosUsuario('abc@@ail.com', '', '')).toBe('El formato del password ingresado no es válido.');
  });
  test('email sin @ / password válido', () => {
    expect(Usuario.validarDatosUsuario('abcmail.com', 'abc', 'abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email sin punto despues de @ / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mailcom', 'abc', 'abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email con @ y punto juntos / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@.com', 'abc', 'abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email sin top-level domain / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.', 'abc','abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email válido / password inválido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.com', '','')).toBe('El formato del password ingresado no es válido.');
  });
  test('email válido / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.com', 'a','a')).toBe('Datos válidos');
  });
  test('email válido / passwords no coinciden', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.com', 'a','b')).toBe('Las contraseñas deben conincidir');
  });
});
