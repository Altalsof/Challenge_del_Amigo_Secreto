console.log("Ejecutando el sistema");

let misAmigos = [];

function agregarAmigo(){

    let inputAmigo = document.getElementById("amigo");
    let nombreDelAmigo = inputAmigo.value;
    
    if (!nombreDelAmigo){
        alert("Por favor, ingrese un nombre.");
        return;
    }

    misAmigos.push(nombreDelAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    
    mostrarAmigos();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ``;
}

function mostrarAmigos () {

    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";

    for (let i = 0; i<misAmigos.length; i++) {
        let nuevoNombre = document.createElement("li");
        nuevoNombre.textContent = misAmigos[i];
        listaDeAmigos.appendChild(nuevoNombre);
    }
}

function sortearAmigo() {

    if (misAmigos.length === 0) {
        alert("Por favor, adiciona a tus amigos.")
        return;
    }

    let miAmigoSorteado = misAmigos[Math.floor(Math.random() * misAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es ${miAmigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    
    misAmigos = [];
}
