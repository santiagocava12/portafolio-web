function calcularFactorial() {
    const inputElement = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    
    const numero = parseInt(inputElement.value);

    if (numero < 0) {
        resultado.textContent = 'Error: El factorial no está definido para números negativos.';
        return;
    }

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, introduce un número válido.';
        return;
    }

    const valorCalculado = factorialRecursivo(numero);

    resultado.textContent = `El factorial de ${numero} es: ${valorCalculado.toLocaleString('es-MX')}`;
}


function factorialRecursivo(n) {
    if (n === 0) {
        return 1;
    }
    
    return n * factorialRecursivo(n - 1);
}