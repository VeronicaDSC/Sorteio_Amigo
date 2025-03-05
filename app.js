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
        linhaNome.textContent =  ` ${i+1}: ${amigos[i]}`;
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



