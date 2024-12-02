
let salarioatual = parseFloat(prompt('Digite o salario atual do funcionario: '));
let percentualA = parseFloat(prompt('Digite o percentual de aumento(%): '));

let aumento = salarioatual * (percentualA / 100);
let novosalario = salarioatual + aumento;

alert('O valor de aumento é: R$' + aumento );
alert('O novo salario é: R$' + novosalario);


