//Exportando uma variável
export const name = 'Marcos';

export function label(attributes){
  const element = document.createElement('label');
  //utilizado para inserir atributos no elemento.
  Object.assign(element, attributes);
  return element;
}

export function input(attributes){
  const element = document.createElement('input');
  Object.assign( element, attributes);
  return element;
}


export function br(){
  const element = document.createElement('br');
  return element;
}