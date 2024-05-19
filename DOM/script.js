function show(){
  //busca somente o elemento que tiver com o id.
  const contactList = document.getElementById('contact-list');
  console.log(contactList);
  
  // busca pelo elemento css (tag), div, input, li, ul
  const listElements = document.getElementsByTagName('li');
  console.log(listElements);

  //busca com base na classe definida, retorna mais de um elemento
  const contactInput = document.getElementsByClassName('contact-input');
  console.log(contactInput);

  //utilizando as querys do css, retorna mais de um elemento se encontrar
  const contact = document.querySelectorAll('#contact-list > li > label');
  console.log(contact);

  //vai buscar um elemento com base no nome, no atributo name
  const contact1 = document.getElementsByName('contact2');
  console.log(contact1);

  //o retorno desta função vai retornar o primeiro elemento encontrado na página
  const fristContact = document.querySelector('#contact-list > li > label');
  console.log(fristContact);
}

function addElement(){
  const ul = document.getElementById('div-ul-inputs');

  const newLi = document.createElement('li');
  newLi.className = 'list-item';
  newLi.innerText = 'Novo Input: ';

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'name';

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}