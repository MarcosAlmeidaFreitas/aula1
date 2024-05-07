const date = new Date();
let anoAtual = date.getFullYear();

const nameUser = prompt('Seja bem vindo, digite o seu nome:');
const surname = prompt(`olá recruta ${nameUser} , tudo bem?\nQual seria o ser sobrenome?`)
const ageBirth = prompt(`${nameUser} ${surname} digite o ano do seu nascimento para adivinhar a sua idade`)
let age = anoAtual - ageBirth;
alert(`Sua idade é: ${age} anos`);

 const result = (6 < 7) ? 'verdadeiro' : 'false';

 if(6 < 7){
  result = 'verdadeiro';
 }else{
  result = 'false'
 }