// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Escuchar el evento "keydown" en el campo de entrada
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto (ejemplo: envío de formularios)
        agregarAmigo(); // Llamar a la función para agregar el amigo
    }
});

// Función para actualizar la lista de amigos en pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada amigo a la lista
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}
