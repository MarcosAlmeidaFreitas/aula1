const inputSession = document.querySelector('#input_session');
const inputLocal = document.getElementById('input_local');
const inputCookie1 = document.getElementById('input_cookie1');
const inputCookie2 = document.getElementById('input_cookie2');

document.getElementById('btn_salvarSession').addEventListener('click', ()=>{
  sessionStorage.setItem('info', inputSession.value);
  inputSession.value = '';
});

document.getElementById('btn_lerSession').addEventListener('click', ()=>{
  inputSession.value = sessionStorage.getItem('info');
});


document.getElementById('btn_salvarLocal').addEventListener('click', () => {
  localStorage.setItem('save', inputLocal.value);
  inputLocal.value = "";
});

document.getElementById('btn_lerLocal').addEventListener('click', () => {
  inputLocal.value = localStorage.getItem('save');
});

document.getElementById('btn_cookie1').addEventListener('click', ()=>{
  //cookieName=value; expires=UTCStringDate; path=/; 
  const cookie = 'info=' + inputCookie1.value; + ';';
  const expiration = 'expires=' + new Date(2024, 6, 14);
  const path = 'path=/;';

  document.cookie = cookie + expiration + path;
  inputCookie1.value = "";
});

document.getElementById('btn_cookie2').addEventListener('click', ()=>{
  //cookieName=value; expires=UTCStringDate; path=/; 
  const cookie = 'text=' + inputCookie2.value; + ';';
  const expiration = 'expires=' + new Date(2024, 6, 14);
  const path = 'path=/;';

  document.cookie = cookie + expiration + path;
  inputCookie1.value = "";
});


