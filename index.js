// Variables
// inicializar array de letras
// inicializar contador de intentos en 0
// inicializar estado del juego como "no iniciado"
// inicializar tablero como vacío



// Función para mezclar las letras aleatoriamente
// función mezclarLetras(array):
//     para cada i desde la longitud del array - 1 hasta 1:
//         generar índice aleatorio j entre 0 e i
//         intercambiar array[i] con array[j]
//     retornar array

// Función para inicializar el juego
// función inicializarJuego():
//     incrementar contador de intentos en 1
//     inicializar estado del juego como "en progreso"
//     mezclar array de letras
//     colocar letras en el tablero de manera oculta (tapadas con un color)

    // Mostrar tablero al jugador
    // mostrarTableroOculto()

// Función para manejar el clic en una celda del tablero
// función manejarClicCelda(celda):
//     si el estado del juego es "en progreso":
//         descubrir celda
//         si es la primera celda descubierta:
//             almacenar celda como primera seleccionada
//         sino:
//             almacenar celda como segunda seleccionada
//             si las letras de ambas celdas coinciden:
//                 mantener celdas descubiertas
//                 verificar si todas las letras han sido descubiertas
//                 si todas están descubiertas:
//                     cambiar estado del juego a "completado"
//                     mostrar mensaje de victoria
//             sino:
//                 ocultar ambas celdas después de un breve tiempo

// // Función para mostrar el tablero oculto
// función mostrarTableroOculto():
//     para cada celda en el tablero:
//         ocultar letra con el color tapado

// // Función para mostrar una celda descubierta
// función descubrirCelda(celda):
//     mostrar letra en la celda

// // Función para ocultar una celda
// función ocultarCelda(celda):
//     ocultar letra con el color tapado

// // Inicializar el juego al cargar la página
// al cargar la página:
//     inicializar array de letras con pares de letras
//     asignar manejador de eventos al botón "empezar" para llamar a la función inicializarJuego
//     asignar manejador de eventos a cada celda del tablero para llamar a la función manejarClicCelda
