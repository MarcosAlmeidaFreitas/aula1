let primeiroTermo;
let sair = false;

primeiroTermo = escolhaNumero();

do{
  const operador = prompt("Escolha um dos operadores: \n '+' Adição\n '-' Subtração\n '*' Multiplicação\n '/' Divisão\n 'voltar' para digitar um novo número\n 'sair' para finalizar o programa'");

  switch(operador){
    case "+":
      soma(primeiroTermo);
      break;
    case "-":
      subtracao(primeiroTermo);
      break;
    case "*":
      multiplicao(primeiroTermo);
      break;
    case "/":
      divisao(primeiroTermo);
      break;
    case "voltar":
      primeiroTermo = escolhaNumero();
      break;
    case "sair":
      sair = true;
      break;
    default:
      alert("Escolha uma das opções mostradas");
  } 
}while(sair === false)
return 0;

function escolhaNumero(){
  let cond = false;
  
  do{
    primeiroTermo = Number.parseInt(prompt("Digite o número que deseja saber a tabuada"));
    cond = Number.isFinite(primeiroTermo);
  }while(cond === false)
  
  return primeiroTermo;
}


function soma(primeiroTermo){
  let i = 0;
  let resultado = [];
  primeiroTermo = Number.parseInt(primeiroTermo);
  resultado.push(`Tabuada do ${primeiroTermo}`);
  
  for(i; i<=20; i++){
    let result = primeiroTermo + i;
    let string = `\n${primeiroTermo} + ${i} = ${result}`;
    resultado.push(string);
  }
  alert(resultado);
}

function subtracao(primeiroTermo){
  let i = 0;
  let resultado = [];
  primeiroTermo = Number.parseInt(primeiroTermo);
  resultado.push(`Tabuada do ${primeiroTermo}`);
  
  for(i; i<=20; i++){
    let result = primeiroTermo - i;
    let string = `\n${primeiroTermo} - ${i} = ${result}`;
    resultado.push(string);
  }
  alert(resultado);
}

function multiplicao(primeiroTermo){
  let i = 0;
  let resultado = [];
  primeiroTermo = Number.parseInt(primeiroTermo);
  resultado.push(`Tabuada do ${primeiroTermo}`);
  
  for(i; i<=20; i++){
    let result = primeiroTermo * i;
    let string = `\n${primeiroTermo} X ${i} = ${result}`;
    resultado.push(string);
  }
  alert(resultado);
}

function divisao(primeiroTermo){
  let i = 1;
  let resultado = [];
  primeiroTermo = Number.parseInt(primeiroTermo);
  resultado.push(`Tabuada do ${primeiroTermo}`);
  
  for(i; i<=20; i++){
    let result = (primeiroTermo / i).toFixed(2);
    let string = `\n${primeiroTermo} ÷ ${i} = ${result}`;
    resultado.push(string);
  }
  alert(resultado);
}