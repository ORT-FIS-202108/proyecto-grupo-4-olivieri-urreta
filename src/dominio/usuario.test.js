/* eslint-disable max-len */
import Usuario from './usuario.mjs';
import Sistema from './sistema.mjs';

describe('Valdadción de email y password', () => {
  test('email y password inválidos', () => {
    expect(Usuario.validarDatosUsuario('abc@@ail.com', '')).toBe('El formato del password ingresado no es válido.');
  });
  test('email sin @ / password válido', () => {
    expect(Usuario.validarDatosUsuario('abcmail.com', 'abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email sin punto despues de @ / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mailcom', 'abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email con @ y punto juntos / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@.com', 'abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email sin top-level domain / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.', 'abc')).toBe('El formato del email ingresado no es válido.');
  });
  test('email válido / password inválido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.com', '')).toBe('El formato del password ingresado no es válido.');
  });
  test('email válido / password válido', () => {
    expect(Usuario.validarDatosUsuario('abc@mail.com', 'a')).toBe('Datos válidos');
  });
});

describe('Pruebas agregar gastos para repetir', () => {
  const sistema = new Sistema();
  sistema.registrarUsuario('minnie@moues.com', 'abcd', 'Minnie', 'Mouse');
  const usuario = sistema.usuarios[sistema.usuarios.length - 1];
  sistema.loginUsuario('minnie@moues.com', 'abcd');
  test('Repetir semanal', () => {
    const fecha = new Date('2021-7-23');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, 0);
    const idGasto = (usuario.gastos[usuario.gastos.length - 1]).id;
    usuario.agregarGastoParaRepetir(idGasto, 1);
    expect(usuario.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = usuario.gastosParaRepetir[usuario.gastosParaRepetir.length - 1].fecha;
    fecha.setDate(fecha.getDate() + 7);
    expect(fechaEnListaRepetir).toBe(fecha);
  });
  test('Agregar gasto a repetir con id existente', () => {
    const idExistente = usuario.gastosParaRepetir[0].idGasto;
    const fechaAntes = usuario.gastosParaRepetir[0].fecha;
    const largoListaAntes = usuario.gastosParaRepetir.length;
    usuario.agregarGastoParaRepetir(idExistente, 1);
    const largoListaDespues = usuario.gastosParaRepetir.length;
    const fechaDespues = usuario.gastosParaRepetir[0].fecha;
    expect(largoListaAntes === largoListaDespues).toBe(true);
    expect(fechaDespues).toBe(fechaAntes);
  });
  test('Repetir quincenal', () => {
    const fecha = new Date('2022-2-20');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, 0);
    const idGasto = (usuario.gastos[usuario.gastos.length - 1]).id;
    usuario.agregarGastoParaRepetir(idGasto, 2);
    expect(usuario.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = usuario.gastosParaRepetir[usuario.gastosParaRepetir.length - 1].fecha;
    fecha.setDate(fecha.getDate() + 15);
    expect(fechaEnListaRepetir).toBe(fecha);
  });
  test('Repetir mensual hasta el 30', () => {
    const fecha = new Date('2022-2-29');
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, 0);
    const idGasto = (usuario.gastos[usuario.gastos.length - 1]).id;
    usuario.agregarGastoParaRepetir(idGasto, 3);
    expect(usuario.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = usuario.gastosParaRepetir[usuario.gastosParaRepetir.length - 1].fecha;
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
    sistema.registrarGasto('gasto prueba', 200, fecha, 0, 0);
    const idGasto = (usuario.gastos[usuario.gastos.length - 1]).id;
    usuario.agregarGastoParaRepetir(idGasto, 3);
    expect(usuario.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = usuario.gastosParaRepetir[usuario.gastosParaRepetir.length - 1].fecha;
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
    const idGasto = (usuario.gastos[usuario.gastos.length - 1]).id;
    usuario.agregarGastoParaRepetir(idGasto, 'anual');
    expect(usuario.existeGastoParaRepetir(idGasto)).toBe(true);
    const fechaEnListaRepetir = usuario.gastosParaRepetir[usuario.gastosParaRepetir.length - 1].fecha;
    fecha.setFullYear(fecha.getFullYear() + 1);
    expect(fechaEnListaRepetir).toBe(fecha);
  });
});
