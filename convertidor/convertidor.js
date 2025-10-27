const unidades = {
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    distancia: ["Metros", "Kilómetros", "Millas", "Pies", "Pulgadas"],
    tiempo: ["Segundos", "Horas", "Días", "Años"],
    moneda: ["MXN", "USD", "EUR"]
};

const categoriaSelect = document.getElementById("categoria");
const unidadDeSelect = document.getElementById("unidadDe");
const unidadASelect = document.getElementById("unidadA");
const valorEntrada = document.getElementById("valorEntrada");
const valorSalida = document.getElementById("valorSalida");
const botonConvertir = document.getElementById("botonConvertir");

function actualizarUnidades() {
    const categoriaActual = categoriaSelect.value;

    unidadDeSelect.innerHTML = "";
    unidadASelect.innerHTML = "";

    unidades[categoriaActual].forEach(unidad => {
        const option1 = document.createElement("option");
        option1.value = unidad;
        option1.textContent = unidad;
        unidadDeSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = unidad;
        option2.textContent = unidad;
        unidadASelect.appendChild(option2);
    });
}

function convertir() {
    const valor = parseFloat(valorEntrada.value);
    const de = unidadDeSelect.value;
    const a = unidadASelect.value;
    let resultado = 0;

    if (isNaN(valor)) {
        valorSalida.value = "Entrada inválida";
        return;
    }

    if (categoriaSelect.value === "temperatura") {
        let tempEnCelsius;
        if (de === "Celsius") tempEnCelsius = valor;
        if (de === "Fahrenheit") tempEnCelsius = (valor - 32) * 5 / 9;
        if (de === "Kelvin") tempEnCelsius = valor - 273.15;

        if (a === "Celsius") resultado = tempEnCelsius;
        if (a === "Fahrenheit") resultado = (tempEnCelsius * 9 / 5) + 32;
        if (a === "Kelvin") resultado = tempEnCelsius + 273.15;
    } else {
        const factores = {
            Metros: 1, Kilómetros: 1000, Millas: 1609.34, Pies: 0.3048, Pulgadas: 0.0254,
            Segundos: 1, Horas: 3600, Días: 86400, Años: 31536000,
            USD: 1, MXN: 17.05, EUR: 0.93
        };

        // ✅ Corrección: convertir primero a la unidad base multiplicando,
        // luego dividir para obtener la unidad destino
        const valorEnBase = valor * factores[de];
        resultado = valorEnBase / factores[a];
    }

    valorSalida.value = resultado.toFixed(4);
}

categoriaSelect.addEventListener("change", actualizarUnidades);
botonConvertir.addEventListener("click", convertir);

actualizarUnidades();
