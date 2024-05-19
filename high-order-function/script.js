const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//mapeando os objetos, percorrendo e retornando o nome.
//permite obter um novo array a partir de um array existente.
const nomes = personagens.map( ( personagem ) => {
  return personagem.nome
});


console.log(nomes);


//filtrando os personagens que tem a raça igual a Orc
//permite obter um novo array, contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(( personagem ) => {
  return personagem.raca === "Orc"
})

console.log(orcs);


//utilizando o reduce para descobrir o nivel total dos personagens.
const nivelTotal = personagens.reduce( ( valorAcumulado,  personagem ) => {
  return valorAcumulado + personagem.nivel;
} , 0); // o parametro 0 é para iniciar o valor acumulado com zero

console.log("O nível total dos personagens é: ", nivelTotal);


//dividindo o array em objetos de acordo com a raças dos personagens.
const racas = personagens.reduce((valorAcumulado, personagem) => {
  if(valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem);
  }else{
    valorAcumulado[personagem.raca] = [personagem];
  }

  return valorAcumulado;
}, {});

console.log(racas);