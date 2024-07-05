/*  
 * É importante na hora da inclusão do script, colocar o type = 'module' para utilizar os módulos.
 * Utiliza o export antes da função, no arquivo principal iremos utilizar o import dentro do arquivo
    com o nome da variável igual ao da função exportada, o nome pode ser redefinida com o 'as'.
 * É importante colocar o .js se for utilizar em browsers.
 * Funciona nativamente nos browsers.
 */

import { name, label, input, br } from './functions.js';

console.log(label({ for: 'fullname', textContent: 'NomeCompleto' }));
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite o seu nome completo.....' }));
console.log(br());
console.log(name);