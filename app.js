// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return; // Salir de la función si el array está vacío
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}
