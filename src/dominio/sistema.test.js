/* eslint-disable max-len */
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
  sistema.usuarioLogueado = 1;
  test('Repetir semanal', () => {
    const fecha = new Date('2021-7-23');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, '');
    const idGasto = (sistema.gastos[sistema.gastos.length - 1]).id;
    sistema.agregarGastoParaRepetir(idGasto, 'semanal');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = sistema.gastosParaRepetir[sistema.gastosParaRepetir.length - 1].fecha;
    fecha.setDate(fecha.getDate() + 7);
    expect(fechaEnListaRepetir).toBe(fecha);
  });
  test('Repetir quincenal', () => {
    const fecha = new Date('2022-2-20');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, '');
    const idGasto = (sistema.gastos[sistema.gastos.length - 1]).id;
    sistema.agregarGastoParaRepetir(idGasto, 'quincenal');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = sistema.gastosParaRepetir[sistema.gastosParaRepetir.length - 1].fecha;
    fecha.setDate(fecha.getDate() + 15);
    expect(fechaEnListaRepetir).toBe(fecha);
  });
  test('Repetir mensual hasta el 30', () => {
    const fecha = new Date('2022-2-29');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, '');
    const idGasto = (sistema.gastos[sistema.gastos.length - 1]).id;
    sistema.agregarGastoParaRepetir(idGasto, 'mensual');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = sistema.gastosParaRepetir[sistema.gastosParaRepetir.length - 1].fecha;
    if (fecha.getDate() === 31) {
      fecha.setMonth(fecha.getMonth() + 2);
      fecha.setDate(0);
    } else {
      fecha.setMonth(fecha.getMonth() + 1);
    }
    expect(fechaEnListaRepetir).toBe(fecha);
  });
  test('Repetir mensual despues del 30', () => {
    const fecha = new Date('2022-1-31');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, '');
    const idGasto = (sistema.gastos[sistema.gastos.length - 1]).id;
    sistema.agregarGastoParaRepetir(idGasto, 'mensual');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = sistema.gastosParaRepetir[sistema.gastosParaRepetir.length - 1].fecha;
    if (fecha.getDate() === 31) {
      fecha.setMonth(fecha.getMonth() + 2);
      fecha.setDate(0);
    } else {
      fecha.setMonth(fecha.getMonth() + 1);
    }
    expect(fechaEnListaRepetir).toBe(fecha);
  });
  test('Repetir anual', () => {
    const fecha = new Date('2021-7-23');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, '');
    const idGasto = (sistema.gastos[sistema.gastos.length - 1]).id;
    sistema.agregarGastoParaRepetir(idGasto, 'anual');
    expect(sistema.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = sistema.gastosParaRepetir[sistema.gastosParaRepetir.length - 1].fecha;
    fecha.setFullYear(fecha.getFullYear() + 1);
    expect(fechaEnListaRepetir).toBe(fecha);
  });
});
