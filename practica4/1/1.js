function evaluarCalificacion() {
    const calificacion = parseFloat(document.getElementById('calificacion').value);
    
    const Resultado = document.getElementById('resultado');
    
    let equivalencia = '';

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        equivalencia = 'Error: La calificación debe ser un número entre 0 y 10.';
    } else if (calificacion === 10) {
        equivalencia = 'LAP';
    } else if (calificacion >= 9) {
        equivalencia = 'MB'; 
    } else if (calificacion >= 7.5) {
        equivalencia = 'B'; 
    } else if (calificacion >= 6) {
        equivalencia = 'S'; 
    } else {
        equivalencia = 'NA'; 
    }
    
 
    Resultado.textContent = `Equivalencia: ${equivalencia}`;
}