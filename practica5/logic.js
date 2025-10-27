function agregarFila() {
    const texto = document.getElementById('texto').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const fechaHora = document.getElementById('fechaHora').value;
    const color = document.getElementById('color').value;
    const rango = document.getElementById('rango').value;
    const resultado = document.getElementById('resultado');

    // Checkbox
    const checks = document.querySelectorAll('input[name="opciones"]:checked');
    // Radio
    const radioSeleccionado = document.querySelector('input[name="grupo"]:checked');

    let errores = [];

    if (texto === '') errores.push('El campo "Nombre" está vacío.');
    if (correo === '') {
        errores.push('El campo "Correo Electrónico" está vacío.');
    } else if (!validarEmail(correo)) {
        errores.push('El "Correo Electrónico" no tiene un formato válido.');
    }

    if (checks.length === 0) errores.push('Selecciona al menos un género de película.');
    if (!radioSeleccionado) errores.push('Selecciona una calificación.');
    if (fechaHora === '') errores.push('Selecciona una "Fecha".');
    if (!color) errores.push('El campo "Color" está vacío.');
    if (rango === '' || isNaN(parseInt(rango))) errores.push('El campo "Puntuación" es inválido.');

    if (errores.length > 0) {
        resultado.textContent = errores.join(' ');
        resultado.style.color = '#ff6b6b'; // Un color de error más brillante para el tema oscuro
        return;
    }

    const valoresCheckbox = obtenerValoresCheckbox();
    const valorRadio = radioSeleccionado.value;

    const tbody = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    const fila = tbody.insertRow();

    insertarCelda(fila, texto);
    insertarCelda(fila, correo);
    insertarCelda(fila, valoresCheckbox);
    insertarCelda(fila, valorRadio);
    insertarCelda(fila, formatearFechaHora(fechaHora));

    const tdColor = fila.insertCell();
    tdColor.innerHTML = '<span class="color-muestra" style="background:' + color + '"></span>' + color;

    insertarCelda(fila, rango);

    document.getElementById('formDatos').reset();
    document.getElementById('rangoValor').textContent = '75'; // Restablecer al valor por defecto del HTML

    resultado.textContent = 'Registro agregado correctamente.';
    resultado.style.color = '#82e0aa'; // Un color de éxito brillante
}

function insertarCelda(fila, texto) {
    const celda = fila.insertCell();
    celda.textContent = texto;
}

function obtenerValoresCheckbox() {
    const seleccionados = document.querySelectorAll('input[name="opciones"]:checked');
    let valores = [];
    seleccionados.forEach(function (chk) {
        valores.push(chk.value);
    });
    return valores.join(', ');
}

function validarEmail(correo) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
}

function formatearFechaHora(valor) {
    return valor.replace('T', ' a las ');
}