let listaJogadores = [];
let nomeTime = "";
//escolherNomeTime();

function escalarJogador() {
  let nomeJogador = document.getElementById('input_nameJogador');
  let numeroCamisa = document.getElementById('input_numeroCamisa');
  let posicionamento = document.getElementById('select_posicaoTime');

  const jogador = {
    id: listaJogadores.length,
    name: nomeJogador.value,
    numeroCamisa: numeroCamisa.value,
    posicionamento: posicionamento.value,
  }

  listaJogadores.push(jogador);

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
    console.log('entrei no else');
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
    
    let btn_excluir = document.createElement('button');
    btn_excluir.innerText = 'Excluir';
    btn_excluir.id = jogador.id;
    btn_excluir.onclick = function excluir(){
      listaJogadores.splice(event.target.id, 1);
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
    celula.appendChild(editar);
    tbody.appendChild(celula);

  });
}


function escolherNomeTime(){
  const h2 = document.getElementById('nome_time');
  const nome = prompt('Digite o nome do seu time: ');
  h2.innerText = `Escalação do ${nome}!`;
}


function editar(){
  console.log('entrou nessa porra');
}