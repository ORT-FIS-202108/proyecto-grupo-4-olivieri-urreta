import Sistema from './sistema.mjs';

describe('tests de función Registro', () => {
  test('login con datos vacios', () => {
    expect(Sistema.iniciarSesion('', '')).toBe('');
  });
});
