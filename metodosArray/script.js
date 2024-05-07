const lista = ["pera","banana","maça", "uva", "melancia"]

//push -> adiciona no fim do array
lista.push("manga");

//adiciona no inicio do array
lista.unshift("morango");

//retira o ultimo elemento da lista e pode atribuir a uma variável
let item = lista.pop();

//retira um item no inicio do array e pode atribuir a uma variável
item = lista.shift()

//verificando se o array contem aquele item na lista, se tiver ele retorna true, se não existir retorna false
let include = lista.includes("manga");

//pesquisando o index de um determinado elemento
let index = lista.indexOf("banana");

//cortando uma parte do array, passando o item inicial e o final e atribuindo a um array
let newLista = lista.slice(0,2);

//juntando dois arrays e transformando em 1, a função concat aceita mais de uma lista para concatenação ou até mesmo strings
let lista3 = newLista.concat(lista, "mais um item", "queijo");


//substituindo elementos do array com splice, 
//a função recebe como argumento a primeiro posição do primeiro elemento que deve ser deletado, 
//depois a quantidade de elementos a ser deletados, se é somente um ou mais elementos,
//e depois o elemento que deseja adicionar no lugar. e a função retorna um array com os itens excluídos
lista.splice();

console.log(item);