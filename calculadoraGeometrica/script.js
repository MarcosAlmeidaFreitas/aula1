let opcao;
do{
  opcao = prompt("Selecione uma das opções abaixo\n" + 
    "1 - Área do triângulo\n" + "2 - Área do retângulo\n" + "3 - Área do quadrado\n" + 
    "4 - Área do trapézio\n" + "5 - Área do circulo\n" + "sair - para finalizar o programa");

  switch(opcao){
    case "1":
      calcAreaTriangule();
      break;
    case "2":
      calcAreaRectangle();
      break;
    case "3":
      calcAreaSquare();
      break;
    case "4":
      calcAreaTrapeze();
      break;
    case "5":
      calcAreaCircle();
      break;
    case "sair":
      break;
    default:
      alert("escolha uma das opções válidas");
  }
}while(opcao != "sair");





function checkNumber(text){
  let exit = false;
  let number;

  do{
    number = parseFloat(prompt(`Digite o valor ${text}: `));
    exit = Number.isFinite(number);
  }while(exit === false)
  
  return number;
}


function calcAreaTriangule(){
  const base = checkNumber("da base");
  const height = checkNumber("da altura");
  
  const result = (base * height) / 2;

  alert(`O valor da área do triângulo é: ${result}`);
}

function calcAreaRectangle(){
  const base = checkNumber("da base");
  const height = checkNumber("da altura");
  
  const result = base * height;

  alert(`O valor da área do retângulo é: ${result}`);
}

function calcAreaSquare(){
  const side = checkNumber("do lado do quadrado");
  
  const result = side * side;

  alert(`O valor da área do quadrado é: ${result}`);
}

function calcAreaTrapeze(){
  const largeBase = checkNumber("da base maior");
  const smallerBase = checkNumber("da base menor");
  const height = checkNumber("da altura");

  const result = ((largeBase + smallerBase) * height) / 2;

  alert(`O valor da área do trapézio é: ${result}`);
}

function calcAreaCircle(){
  const radius = checkNumber("do raio");

  const result = Math.PI * (radius * radius);
  
  alert(`O valor da área do circulo é: ${result}`);
}