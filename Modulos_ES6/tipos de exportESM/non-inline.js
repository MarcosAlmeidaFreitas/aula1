function group(){
  console.log('Export nomeado não-inline (agrupado)');
}

function a(){
  console.log('Função a');
}

function b(){
  console.log('Função b');
}

function c(){
  console.log('Função c');
}

function exportDefault(){
  console.log('Export default não in-line');
}


export { group, a, b, c };
export default exportDefault;


