const main = document.querySelector('main');

// Función para agregar una entrada al blog
function agregarEntrada(titulo, contenido, imagenURL) {
    const entrada = document.createElement('article');
    entrada.className = 'entrada';

    entrada.innerHTML = `
        <h2>${titulo}</h2>
        <img src="${imagenURL}" alt="${titulo}">
        <p>${contenido}</p>
    `;

    main.appendChild(entrada);
}

// Agregar algunas entradas de ejemplo
agregarEntrada('Mi paseo en la montaña', 'Hoy tuve un emocionante paseo en la montaña.', 'imagen1.jpg');
agregarEntrada('Mi nueva bicicleta', '¡Mejoré mi rendimiento con mi nueva bicicleta!', 'imagen2.jpg');
