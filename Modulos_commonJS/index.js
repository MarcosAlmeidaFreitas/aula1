/**
 * Utiliza o module.export em cada arquivo e importa como uma variável utilizando o require.
 * O commonJS não é suportado pelos navegadores, somente pelo nodeJS
 */
const render = require("./render");
const store = require("./store");

console.log('A aplicação foi iniciada....');
store();
render();
console.log('Finalizando a aplicação....');