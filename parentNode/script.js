function register(element){
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation;

  if(password == passwordConfirmation){
    console.log(`Usuário ${username} registrado`);
  }else{
    console.log('A senha não confere.')
 }
}