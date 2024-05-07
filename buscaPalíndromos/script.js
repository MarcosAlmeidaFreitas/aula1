let palavra = prompt("Digite a palavra que deseja saber se é um palíndromo");

const palindromo = convertToPalindromes(palavra);

if(palavra === palindromo){
  alert(`A sua palavra é um palíndromo pois ${palavra} é igual a ${palindromo}`);
}else{
  alert(`A sua palavra não é um palíndromo pois ${palavra} é diferente de ${palindromo}`);
}






function convertToPalindromes(palavra){
  let index = palavra.length;
  console.log(index)
  let palindromes = "";

  for(index; index >=0; index--){
    palindromes = palindromes + palavra.charAt(index);
  }
  
  return palindromes;
}