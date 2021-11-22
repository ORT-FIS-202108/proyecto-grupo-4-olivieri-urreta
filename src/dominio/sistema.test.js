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
  sistema.registrarUsuario('minnie@moues.com', 'abcd', 'Minnie', 'Mouse');
  const usuario = sistema.usuarios[sistema.usuarios.length - 1];
  beforeEach(() => {
    sistema.loginUsuario('minnie@moues.com', 'abcd');
  });
  test('registro sin usuario logueado', () => {
    sistema.logout();
    const resultadoRegistro = sistema.registrarGasto('Prueba Reg. 1', 200, new Date(), 0, 0);
    expect(resultadoRegistro).toBe('No fue posible registrar el gasto');
  });
  test('registro sin nombre', () => {
    const resultadoRegistro = sistema.registrarGasto('', 150, new Date(), 1, 0);
    expect(resultadoRegistro).toBe('El nombre ingresado no es válido');
  });
  test('registro con monto NaN', () => {
    const resultadoRegistro = sistema.registrarGasto('Prueba Reg. 3', 'abc', new Date(), 2, 0);
    expect(resultadoRegistro).toBe('El monto ingresado no es válido');
  });
  test('registro sin fecha', () => {
    const resultadoRegistro = sistema.registrarGasto('Prueba Reg. 4', 250, '', 4, 0);
    const gasto = usuario.gastos[usuario.gastos.length - 1];
    const today = (new Date()).setHours(0, 0, 0, 0);
    expect(resultadoRegistro).toBe('Gasto creado con éxito');
    expect(gasto.fecha.setHours(0, 0, 0, 0)).toBe(today);
  });
  test('registro con categoría inválida (mayor)', () => {
    sistema.registrarGasto('Prueba Reg. 5', 500, new Date(), 999, 0);
    const gasto = usuario.gastos[usuario.gastos.length - 1];
    expect(gasto.categoria).toBe(0);
  });
  test('registro con categoría inválida (menor)', () => {
    sistema.registrarGasto('Prueba Reg. 6', 600, new Date(), -111, 0);
    const gasto = usuario.gastos[usuario.gastos.length - 1];
    expect(gasto.categoria).toBe(0);
  });
  test('registro con repetir válido', () => {
    sistema.registrarGasto('Prueba Reg. 7', 200, new Date(), 0, 1);
    const gastoParaRepetir = usuario.gastosParaRepetir[usuario.gastosParaRepetir.length - 1];
    const gasto = usuario.gastos[usuario.gastos.length - 1];
    expect(gastoParaRepetir.idGasto).toBe(gasto.id);
  });
  test('registro válido', () => {
    const resultadoRegistro = sistema.registrarGasto('Prueba Reg. 8', 200, new Date(), 0, 0);
    expect(resultadoRegistro).toBe('Gasto creado con éxito');
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
  const usuario1 = sistema.registrarUsuario('test@test.com', '1234', 'pepe', 'grillo');
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

  describe('Obtener gastos para un mes elegido', () => {
    const sistema = new Sistema();
    sistema.registrarUsuario('minnie@moues.com', 'abcd', 'Minnie', 'Mouse');
    sistema.loginUsuario('minnie@moues.com', 'abcd');
    test('obtener listado para un mes sin gastos', () => {
      sistema.registrarGasto('Prueba gasto listado 1', 1500, new Date(2021, 9, 30), 0, 0);
      sistema.registrarGasto('Prueba gasto listado 1', 1500, new Date(2021, 11, 1), 0, 0);
      const resultado = sistema.obtenerGastosDelMes(10, 2021);
      expect(resultado.length).toBeLessThan(1);
    });
    test('obtener listado para un mes con gastos', () => {
      sistema.registrarGasto('Prueba gasto listado 2', 2000, new Date(2021, 9, 1), 0, 0);
      const resultado = sistema.obtenerGastosDelMes(9, 2021);
      expect(resultado.length).toBe(2);
    });
  });

  describe('Obtener nombre ícono', () => {
    const sistema = new Sistema();
    test('Posición fuera de la lista (mayor)', () => {
      expect(sistema.obtenerNombreIcono(999)).toBe('info');
    } );
    test('Posición fuera de la lista (menor)', () => {
      expect(sistema.obtenerNombreIcono(-1)).toBe('info');
    } );
    test('Posición válida de la lista (límite inferior)', () => {
      expect(sistema.obtenerNombreIcono(0)).toBe('paid');
    } );
    test('Posición válida de la lista (límite superior)', () => {
      expect(sistema.obtenerNombreIcono(6)).toBe('commute');
    } );
  });
});
