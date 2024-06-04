let listaJogadores = [];
let editarJogador = false;
let jogadorASerEditado = "";

function escalarJogador() {
  let nomeJogador = document.getElementById('input_nameJogador');
  let numeroCamisa = document.getElementById('input_numeroCamisa');
  let posicionamento = document.getElementById('select_posicaoTime');

  const jogador = {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    name: nomeJogador.value,
    numeroCamisa: numeroCamisa.value,
    posicionamento: posicionamento.value,
  }

  if(editarJogador === false){
    listaJogadores.push(jogador);
  }else{
    let index = listaJogadores.indexOf(jogadorASerEditado);
    jogador.id = jogadorASerEditado.id;
    listaJogadores[index] = jogador;
    editarJogador = false;
    jogadorASerEditado = {};
  }


  atualizarLista();
}

function criarTabela() {
  const table = document.getElementById('tabela_escalacao');
  let tbody = document.createElement('tbody');
  tbody.id = 'tbody';
  table.appendChild(tbody);
}

function atualizarLista() {
  if (document.getElementById('tbody') === null) {
    criarTabela();
  } else {
    const table = document.getElementById('tabela_escalacao');
    let tbody = document.getElementById('tbody');
    table.removeChild(tbody);
    criarTabela();
  }

  listaJogadores.forEach(jogador => {
    let tbody = document.getElementById('tbody');

    let celula = document.createElement('tr');

    let njogador = document.createElement('td');
    let ncamisa = document.createElement('td');
    let posi = document.createElement('td');
    
    let editar = document.createElement('td');
    let excluir = document.createElement('td');
    
    let btn_editar = document.createElement('button');
    btn_editar.innerText = 'Editar';
    btn_editar.id = jogador.id;
    btn_editar.className = 'btn';

    btn_editar.onclick = function editar(){
      let jogador = listaJogadores.filter(element => element.id === event.target.id )

      jogador = jogador[0];
      setJogador(jogador);
    }

    editar.appendChild(btn_editar);

    let btn_excluir = document.createElement('button');
    btn_excluir.innerText = 'Excluir';
    btn_excluir.id = jogador.id;
    btn_excluir.onclick = function excluir(){
      let jogador = listaJogadores.filter(element => element.id === event.target.id );
      let index = listaJogadores.indexOf(jogador[0]);
      listaJogadores.splice(index, 1);
      atualizarLista();
    }

    btn_excluir.className = 'btn'
    excluir.appendChild(btn_excluir);

    njogador.innerText = jogador.name;
    ncamisa.innerText = jogador.numeroCamisa;
    posi.innerText = jogador.posicionamento;
    
    celula.appendChild(njogador);
    celula.append(ncamisa);
    celula.appendChild(posi);
    celula.appendChild(excluir);
    celula.appendChild(editar);
    tbody.appendChild(celula);
    limparInputText();
  });
}


function escolherNomeTime(){
  const h2 = document.getElementById('nome_time');
  const nome = prompt('Digite o nome do seu time: ');
  h2.innerText = `Escalação do ${nome}!`;
}


function limparInputText(){
  const nomeJogador = document.getElementById('input_nameJogador');
  const numeroCamisa = document.getElementById('input_numeroCamisa');
  const select_posicaoTime = document.getElementById('select_posicaoTime');
  
  nomeJogador.value = "";
  numeroCamisa.value = "";
  select_posicaoTime.selectedIndex = 0;
}

function setJogador(jogador){
  let nomeJogador = document.getElementById('input_nameJogador');
  let numeroCamisa = document.getElementById('input_numeroCamisa');
  let posicionamento = document.getElementById('select_posicaoTime');

  nomeJogador.value = jogador.name;
  numeroCamisa.value = jogador.numeroCamisa;
  posicionamento.value = jogador.posicionamento;

  editarJogador = true;
  jogadorASerEditado = jogador;
}