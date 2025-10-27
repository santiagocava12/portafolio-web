function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fecha = document.getElementById('fecha').value;
    const color = document.getElementById('color').value;

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <strong>Nombre:</strong> ${nombre} <br>
        <strong>Correo:</strong> ${correo} <br>
        <strong>Edad:</strong> ${edad} <br>
        <strong>Género:</strong> ${genero} <br>
        <strong>Fecha de Nacimiento:</strong> ${fecha} <br>
        <strong>Color Favorito:</strong> ${color}
    `;
}