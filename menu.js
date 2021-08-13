var mensaje = '';
var pedidoDic = {};
const tamal_selecto = document.querySelectorAll('.agregar');
const tamal_eliminado = document.querySelectorAll('.quitar');

// funcionalidad al boton del cuadro usmeador
const btnCuadroEscondido = document.querySelector('#btnEscondido');
const CuadroEscondido = document.querySelector('.cuadro__pedido-hidden');
const cuadroEscondidoMessage = document.querySelector(
    '.cuadro__pedido-hidden--chat'
);
btnCuadroEscondido.addEventListener('click', function () {
    CuadroEscondido.classList.toggle('uncrouched');
    cuadroEscondidoMessage.classList.toggle('hidden');
});

// Función para modificar id="chatpedido"
function chatpedido(pedido) {
    const pedido_array = Object.entries(pedido);

    document.getElementById('chatpedido').textContent = '';

    for (var tamal_numero of pedido_array) {
        var tBR = document.createElement('br'); // Se tiene que crear uno por elemento

        texto_por_tamal = '-' + tamal_numero[1] + ' de ' + tamal_numero[0];
        var node_text_chat = document.createTextNode(texto_por_tamal);

        document.getElementById('chatpedido').appendChild(node_text_chat);

        document.getElementById('chatpedido').appendChild(tBR);
    }
}

for (let i = 0; i < tamal_selecto.length; i++) {
    // Aquegar a cada boton un event listener que ejecute una
    // función que agregue el texto al mensaje.
    tamal_selecto[i].addEventListener('click', function () {
        const tamal_sabor = tamal_selecto[i].getAttribute('id');
        const parent = tamal_selecto[i].closest('.tamales__tarjeta');
        const text_tamal = parent
            .querySelector('.tamales_tipo')
            .textContent.trim();

        // Ahora debo quitarle el formato y cambiar el texto del id="chatpedido"
        // Primer actualizar los pedidos.
        if (pedidoDic[text_tamal] === undefined) {
            pedidoDic[text_tamal] = 1;
        } else {
            pedidoDic[text_tamal] += 1;
        }
        chatpedido(pedidoDic);
    });
}

for (let i = 0; i < tamal_eliminado.length; i++) {
    // Aquegar a cada boton un event listener que ejecute una
    // función que agregue el texto al mensaje.
    tamal_eliminado[i].addEventListener('click', function () {
        const tamal_sabor = tamal_eliminado[i].getAttribute('id');
        const parent = tamal_eliminado[i].closest('.tamales__tarjeta');
        const text_tamal = parent
            .querySelector('.tamales_tipo')
            .textContent.trim();

        // Ahora debo quitarle el formato y cambiar el texto del id="chatpedido"
        // Primer actualizar los pedidos.
        if (pedidoDic[text_tamal] === undefined) {
            // Do not do nothingh
        } else {
            pedidoDic[text_tamal] -= 1;
            if (pedidoDic[text_tamal] === 0) {
                delete pedidoDic[text_tamal];
            }
        }
        chatpedido(pedidoDic);
    });
}
