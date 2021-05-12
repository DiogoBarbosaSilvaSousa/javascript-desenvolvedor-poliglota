import {calculaImc} from './oms.js';
import {Conta} from './models/conta.js';

const imc = calculaImc({  altura:1.8 , peso:105 });

console.log(imc);

const conta = new Conta({
    titular: 'Diogo',
    banco: '123',
    agencia: '456',
    numero: '789'
});

console.log(conta);