const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

document.addEventListener('keydown', (event) => {
    const tecla = event.key;
    if (/[0-9]/.test(tecla)) {
        display.agregarNumero(tecla);
    } else if (tecla === '+') {
        display.computar('sumar');
    } else if (tecla === '-') {
        display.computar('restar');
    } else if (tecla === '*') {
        display.computar('multiplicacion');
    }
    else if (tecla === '/') {
        display.computar('division');
    } else if (tecla === 'Enter') {
        display.computar('igual');
    } else if (tecla === 'Backspace') {
        display.borrar()
    }
});