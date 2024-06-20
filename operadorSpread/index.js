//para separar uma string
const mensagem = 'hi, I am using spread operator';
console.log(...mensagem);

const city = ['Cardoso Moreira', 'Campos dos Goytacazes', 'Italva', 'Itaperuna', 'Buzios', 'Iguaba'];
//aplicando em todo o array
console.log(...city);
//aplicando em um item do array
console.log(...city[4]);



//copiando um array

/*o array trabalha com referencias, então se fizermos uma copia, 
tudo que modificarmos no array de copia modifica o original*/

const newCity = city;

newCity.pop();
newCity.pop();
newCity.push('Varre Sai');

//aqui mostramos que se modificar um irá modificar o outro por referencia
console.log({ city, newCity });

//para criar de forma separada utilizando o operador spread seria assim
const cloneCity = [...city];

cloneCity.push('Arraial do Cabo');

console.log({ city, cloneCity });




//utilizando em funções
function sum(...numbers){
  return numbers.reduce((acum, num) =>  acum + num, 0 )
}


console.log(sum(2,2,2));
console.log(sum(10,15,20))



