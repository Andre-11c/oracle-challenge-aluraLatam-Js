// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
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
