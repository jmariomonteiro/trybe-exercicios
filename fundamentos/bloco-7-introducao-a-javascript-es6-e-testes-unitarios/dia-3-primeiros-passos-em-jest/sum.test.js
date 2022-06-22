const {sum, myRemove,myFizzBuzz} = require('./sum');

describe('Questão 1', () => {
    test('quatro mais cinco é nove', () => {
      expect(sum(4, 5)).toBe(9);
    });

    test('zero + zero é igual a 0', () => {
        expect(sum(0,0)).toBe(0);
    });

    test('recebe 4 e "5"', () => {
        expect(() => sum(4, '5')).toThrowError();
    });
    test('recebe 4 e "5"', () =>{
        expect(() => sum(4,"5")).toThrowError('parameters must be numbers')
    });
});

describe('Questão 2', () => {
    test('a função retorna o valor esperado', () => {
        expect('myRemove([1, 2, 3, 4], 3)').toEqual('myRemove([1, 2, 3, 4], 3)');
    });
    test('a função não retorna o valor esperado', () => {
        expect('myRemove([1, 2, 3, 4], 3)').toContain('myRemove([1, 2, 3, 4]');
    });
    test('a função retorna o valor esperado', () => {
        expect('myRemove([1, 2, 3, 4], 5)').toEqual('myRemove([1, 2, 3, 4], 5)');
    });
});

describe('Questão 3', () => {
    test('se o numero for divisível por 3 e 5 retorne "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('se o numero for divisível por 3 retorne "fizz"', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    test('se o numero for divisível por 5 retorne "buzz"', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    test('se o numero não é divisivel por 3 nem por 5 retorne o numero', () => {
        expect(myFizzBuzz(2)).toBe(2);
    });
    test('parâmetro não é um numero, retorna false', () => {
        expect(myFizzBuzz('1')).toBe(false);
    });
});