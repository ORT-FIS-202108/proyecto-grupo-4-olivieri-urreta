/* eslint-disable max-len */
import Sistema from './sistema.mjs';
import Usuario from './usuario.mjs';

describe('Pruebas registro de usuario', () => {
  const sistema = new Sistema();
  test('registro con usuario y password vacios', () => {
    expect(sistema.registrarUsuario('', '', 'pepe', 'grillo')).toBe('El formato del password ingresado no es válido.');
  });
  test('registro con usuario vacio', () => {
    expect(sistema.registrarUsuario('', 'abcd', 'Mickey', 'Mouse')).toBe('El formato del email ingresado no es válido.');
  });
  test('registro con formato de usuario inválido', () => {
    expect(sistema.registrarUsuario('nombreusuario', 'abcd', 'Pato', 'Duck')).toBe('El formato del email ingresado no es válido.');
  });
  test('registro con password vacio', () => {
    expect(sistema.registrarUsuario('user@mail.com', '', 'Daisy', 'Duck')).toBe('El formato del password ingresado no es válido.');
  });
  test('registro de usuario válido', () => {
    expect(sistema.registrarUsuario('user@mail.com', 'abcd', 'Minnie', 'Mouse')).toBe('¡El usuario fue creado correctamente!');
  });
  test('registro con usaurio ya existente', () => {
    expect(sistema.registrarUsuario('user@mail.com', 'fghi', 'Peter', 'Pan')).toBe('El email ya se encuentra registrado');
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

describe('Existe Usuario', () => {
  const sistema = new Sistema();
  const usuario1 = new Usuario('test@test.com', '1234', 'pepe', 'grillo');
  sistema.agregarUsuario(usuario1);

  test('email vacio', () => {
    expect(sistema.existeUsuario('')).toBe(false);
  });
  test('email correcto', () => {
    expect(sistema.existeUsuario('test@test.com')).toBe(true);
  });
  test('email incorrecto', () => {
    expect(sistema.existeUsuario('noexiste@test.com')).toBe(false);
  });
});

describe('Login usuario', () => {
  const sistema = new Sistema();
  sistema.registrarUsuario('mickey@disney.com', 'disney', 'Mickey', 'Mouse');
  test('email vacío', () => {
    expect(sistema.loginUsuario('', 'disney')).toBe('Usuario o contraseña incorrectos');
  });
  test('password vacío', () => {
    expect(sistema.loginUsuario('mickey@disney.com', '')).toBe('Usuario o contraseña incorrectos');
  });
  test('email inválido / password válido', () => {
    expect(sistema.loginUsuario('mickey@@@@@disney.com', 'mickey@disney.com')).toBe('Usuario o contraseña incorrectos');
  });
  test('email válido / password inválido', () => {
    expect(sistema.loginUsuario('mickey@disney.com', 'disneyyyyyy')).toBe('Usuario o contraseña incorrectos');
  });
  test('email y password válidos', () => {
    expect(sistema.loginUsuario('mickey@disney.com', 'disney')).toBe('¡Bienvenido!');
  });
});

describe('Indice Usuario', () => {
  const sistema = new Sistema();
  const usuario1 = new Usuario('test@test.com', '1234', 'pepe', 'grillo');
  sistema.agregarUsuario(usuario1);
  const usuario2 = new Usuario('test2@test.com', '12345', 'mickey', 'mouse');
  sistema.agregarUsuario(usuario2);

  test('email vacio', () => {
    expect(sistema.indiceUsuario('')).toBe(-1);
  });
  test('email correcto indice 1', () => {
    expect(sistema.indiceUsuario('test@test.com')).toBe(0);
  });
  test('email incorrecto', () => {
    expect(sistema.indiceUsuario('noexiste@test.com')).toBe(-1);
  });
  test('email correcto indice 2', () => {
    expect(sistema.indiceUsuario('test2@test.com')).toBe(1);
  });
});

describe('Verificar Contraseña', () => {
  const sistema = new Sistema();
  const usuario1 = new Usuario('test@test.com', '1234', 'pepe', 'grillo');
  sistema.agregarUsuario(usuario1);
  const usuario2 = new Usuario('test2@test.com', '12345', 'mickey', 'mouse');
  sistema.agregarUsuario(usuario2);
  // No se verifica si se ingresa indice incorrecto, o contraseña vacia
  // ya que se verifica antes de llegar a esta función
  test('indice correcto contraseña mal', () => {
    expect(sistema.verificarPassword(0, '4321')).toBe(false);
  });
  test('indice y contraseña correctos', () => {
    expect(sistema.verificarPassword(0, '1234')).toBe(true);
  });
});
