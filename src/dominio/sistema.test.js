/* eslint-disable max-len */
import Gasto from './gasto.mjs';
import Sistema from './sistema.mjs';
import Usuario from './usuario.mjs';

describe('Pruebas registro de usuario', () => {
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

// describe('Pruebas creación de usuario', () => {
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

describe('Pruebas registrar gasto', () => {
  const sistema = new Sistema();
  sistema.usuarios.push(new Usuario('usr@test.com', 'pswd'));
  test('registro sin datos', () => {
    const res = sistema.registrarGasto('', '', '', '', '', '');
    expect(res).not.toBe('Gasto guardado');
  });
  test('registro sin nombre', () => {
    const res = sistema.registrarGasto('', 150, '20/06/2021', 0, 1, 'unico');
    expect(res).not.toBe('Gasto guardado');
  });
  test('registro con monto NaN', () => {
    const res = sistema.registrarGasto('gasto prueba', 'x', '20/06/2021', 0, 1, 'unico');
    expect(res).toBe('El monto ingresado no es válido. Ingrese un número mayor que 0.');
  });
  test('registro sin fecha', () => {
    const res = sistema.registrarGasto('gasto prueba', 200, '', 0, 1, 'unico');
    const gasto = sistema.gastos[sistema.gastos.length - 1];
    const today = (new Date()).setHours(0, 0, 0, 0);
    expect(res).toBe('Gasto guardado');
    expect(gasto.fecha.setHours(0, 0, 0, 0)).toBe(today);
  });
  test('registro con categoría inválida', () => {
    const res = sistema.registrarGasto('gasto prueba', 200, '20/06/2021', 999, 1, 'unico');
    expect(res).toBe('Gasto guardado');
  });
  test('registro con repetir válido', () => {
    const res = sistema.registrarGasto('gasto prueba', 200, '20/06/2021', 0, 'mensual');
    const gastoParaRepetir = sistema.gastosParaRepetir[sistema.gastosParaRepetir.length - 1];
    const gasto = sistema.gastos[sistema.gastos.length - 1];
    expect(res).toBe('Gasto guardado');
    expect(gastoParaRepetir.idGasto).toBe(gasto.id);
  });
  test('registro con reperir inválido', () => {
    const res = sistema.registrarGasto('gasto prueba', 200, '20/06/2021', 0, 1, 'abc');
    const gasto = sistema.gastos[sistema.gastos.length - 1];
    expect(res).toBe('Gasto guardado');
    expect(sistema.existeGastoParaRepetir(gasto.id)).toBe(false);
  });
  test('registro válido', () => {
    const res = sistema.registrarGasto('gasto prueba', 200, '20/06/2021', 0, 1, 'unico');
    expect(res).toBe('Gasto guardado');
  });
});

describe('Pruebas agregar gastos para repetir', () => {
  const sistema = new Sistema();
  test('Repetir semanal', () => {
    const idGasto = (new Gasto('gasto prueba', 200, '20/06/2021', 0, 1, '')).id;
    sistema.agregarGastoParaRepetir(idGasto, 'semanal');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
  });
  test('Repetir quincenal', () => {
    const idGasto = (new Gasto('gasto prueba', 200, '20/06/2021', 0, 1, '')).id;
    sistema.agregarGastoParaRepetir(idGasto, 'quincenal');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
  });
  test('Repetir mensual', () => {
    const idGasto = (new Gasto('gasto prueba', 200, '20/06/2021', 0, 1, '')).id;
    sistema.agregarGastoParaRepetir(idGasto, 'mensual');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
  });
  test('Repetir anual', () => {
    const idGasto = (new Gasto('gasto prueba', 200, '20/06/2021', 0, 1, '')).id;
    sistema.agregarGastoParaRepetir(idGasto, 'anual');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
  });
});
