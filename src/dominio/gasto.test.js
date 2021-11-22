/* eslint-disable max-len */
import Sistema from './sistema.mjs';

describe('Creación de gasto', () => {
  const sistema = new Sistema();
  sistema.registrarUsuario('minnie@moues.com', 'abcd', 'Minnie', 'Mouse');
  sistema.loginUsuario('minnie@moues.com', 'abcd');
  const usuario = sistema.usuarios[sistema.usuarios.length - 1];
  test('gasto con fecha válida', () => {
    sistema.registrarGasto('Prueba creacion gasto 1', 50, new Date(2024, 3, 15), 0, 0);
    const gasto = usuario.gastos[usuario.gastos.length - 1];
    expect(gasto.fecha.setHours(0, 0, 0, 0)).toBe((new Date(2024, 3, 15).setHours(0, 0, 0, 0)));
  });
  test('gasto con fecha inválida', () => {
    sistema.registrarGasto('Prueba creacion gasto 1', 50, '34/f/me2020', 0, 0);
    const gasto = usuario.gastos[usuario.gastos.length - 1];
    expect(gasto.fecha.setHours(0, 0, 0, 0)).toBe((new Date().setHours(0, 0, 0, 0)));
  });
});
