const soma = require('../app/function/soma');

const chai = require('chai');
const expect = chai.expect;

describe('Função Soma', () => {
    it('Deve retornar 4 quando somar 2 e 2', () => {
        expect(soma(2, 2)).to.equal(4);
    });

    it('Deve retornar 0 quando somar 0 e 0', () => {
        expect(soma(0, 0)).to.equal(0);
    });

    it('Deve retornar -1 quando somar 2 e -3', () => {
        expect(soma(2, -3)).to.equal(-1);
    });

});
