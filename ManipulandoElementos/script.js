const input = document.querySelector("#input_txt");

document.getElementById('type').addEventListener('click', () =>{
  input.setAttribute('type', 'radio');
});

document.getElementById('habDes').addEventListener('click', ()=>{
  input.disabled = !input.disabled;
});


