//import inline
import { inline } from './inline.js'; // pode ser renomeado com a tag 'as' depois do n
//Quando não coloca a chave você importa o default do arquivo. Nesse você pode colocar qualquer nome
import defaultInline from './inline.js';

//import non-inline
import { group } from './non-inline.js';
import defaultInline from './inline.js';

//inline
inline();
defaultInline();

// não-inline
group();
exportDefault();