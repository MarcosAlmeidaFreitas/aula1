const button = document.getElementById('switchBtn');
button.addEventListener('click', ()=>{
  document.body.classList.toggle('is-light');
  document.body.classList.toggle('is-dark');
})