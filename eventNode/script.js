function register(event){
  // console.log(event);
  /* Através do evento estamos buscando o 'parent' no caso a section pai do formulário
    através dela buscamos todos os componentes */
  const sectionElement = event.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value;
  
  if(password === passwordConfirmation){
    console.log(`O usuário ${username} foi cadastrado`);
  }else{
    console.log(`As senhas não conferem`);
  }
}

const btn_register = document.getElementById('btn_register');

//Nessa função não foi colocado parenteses,
// pois não desejamos o resultado da função mas sim passar a função  
btn_register.addEventListener('click', register);
