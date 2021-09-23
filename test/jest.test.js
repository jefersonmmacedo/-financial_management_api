test('Devo conhecer as principais acertivas do Jest', () => {
  // Verificando se o numero é nulo
  let number = null;
  expect(number).toBeNull();
  // Verificando se o numero não é nulo
  number = 10;
  expect(number).not.toBeNull();
  // Verificando se o numero é igual a ao valor setado. ( 2 formas)
  expect(number).toBe(10);
  expect(number).toEqual(10);
  // Verificando se o numero é maior que 9
  expect(number).toBeGreaterThan(9);
  // Verificando se o numero é menor que 11
  expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
  // Verificando que no objeto contém a propriedade setada
  const obj = { name: 'Jeferson Macedo', email: 'jefersonmacedo@mail.com' };
  expect(obj).toHaveProperty('name');
  // Verificando que no objeto contém a propriedade e valores setados
  expect(obj).toHaveProperty('name', 'Jeferson Macedo');
  // Verificando que no objeto contém a propriedade e valores setados ( outra forma )
  expect(obj.name).toBe('Jeferson Macedo');

  const obj2 = { name: 'Jeferson Macedo', email: 'jefersonmacedo@mail.com' };
  expect(obj2).toEqual(obj);
  expect(obj2).toBe(obj2);
});
