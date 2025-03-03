let amigos = [];
let amigosSorteados = [];
console.log("Lista de Amigos Vazio: ", amigos)

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;
    console.log("Nome unico: ", nomeAmigo)

    if (!nomeAmigo){
        alert("Opa! Faltou o nome do amigo :)");
        return
    }

    amigos.push(nomeAmigo)
    inputAmigo.value = ''
    inputAmigo.focus();

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ''
    
    atualizarLista()
    console.log("Lista de Amigos: ", amigos)

}


function atualizarLista(){
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = ''

    for(let i = 0; i < amigos.length; i++){
        let linhaNome = document.createElement("li");
        linhaNome.textContent =  `Nome ${i+1}: ${amigos[i]}`;
        listaHtml.appendChild(linhaNome)
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
      alert("Nenhum amigo adicionado");
      return;
    }

    if(amigos.length < 2) {
      alert('Adicione pelo menos dois amigos para sortear.');
      return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // amigos["algum indice"]
    
    let resultado = document.getElementById("resultado");

    if (sorteado) {
        resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;
    } else {
        resultado.innerHTML = "click novamente"; // Limpa a mensagem se nenhum amigo foi sorteado
    }

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML=''
    amigos = []
    dispararFogos()
}

 function dispararFogos() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'] };

  function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
          return clearInterval(interval);
      }

      const particleCount = 200 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
  }, 100);
} 

function resetar() {
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = ''
    amigos = []
    let inputAmigo = document.getElementById("amigo");
    inputAmigo.value = ''
    inputAmigo.focus();
}


// let itemLista = document.createElement("li");
//         itemLista.textContent =  amigos[i];
//         listaAmigos.appendChild(itemLista);



