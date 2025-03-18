let amigos = []; 

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); 

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    amigos.push(nombreAmigo); // Usa 'amigos' en plural
    inputAmigo.value = ""; // Resetea el input
    inputAmigo.focus(); // Enfoca el input nuevamente
    renderizarAmigos(); 
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i]; 
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarlista = document.getElementById("listaAmigos");
    limpiarlista.innerHTML = "";

    
}s
