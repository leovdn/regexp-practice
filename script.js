import ValidarCPF from './validarCPF.js'

const cpf = document.querySelector('#cpf');
const validarCPF = new ValidarCPF(cpf).iniciar();
