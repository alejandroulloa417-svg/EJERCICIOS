export function removeDuplicates(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        let existe = false;

        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                existe = true;
                break;
            }
        }

        if (!existe) {
            result.push(array[i]);
        }
    }

    return result;
}

export function procesarDuplicados() {
    const input = document.getElementById("duplicatesInput").value;

    if (!input) {
        document.getElementById("resultado").textContent =
            "Ingresa valores separados por coma.";
        return;
    }

    // Convertir a array
    const array = input
        .split(",")
        .map(v => v.trim())
        .filter(v => v !== "");

    if (array.length === 0) {
        document.getElementById("resultado").textContent =
            "Ingresa valores válidos.";
        return;
    }

    const filtrado = removeDuplicates(array);

    document.getElementById("resultado").textContent =
        `Array sin duplicados: [ ${filtrado.join(", ")} ]`;
}
export function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                const tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

export function procesarOrdenamiento() {
    const inputEl = document.getElementById("sortInput");
    // Usamos un único contenedor #resultado (crearlo si no existe)
    let resultadoCont = document.getElementById("resultado");
    if (!resultadoCont) {
        resultadoCont = document.createElement("div");
        resultadoCont.id = "resultado";
        document.body.appendChild(resultadoCont);
    }

    if (!inputEl) {
        resultadoCont.textContent = "Error: falta el input #sortInput.";
        return;
    }

    // Parsear y validar números
    const raw = inputEl.value.trim();
    if (!raw) {
        resultadoCont.textContent = "Ingresa números separados por comas.";
        return;
    }

    const array = raw
        .split(",")
        .map(s => Number(s.trim()))
        .filter(n => !Number.isNaN(n));

    if (array.length === 0) {
        resultadoCont.textContent = "No ingresaste números válidos.";
        return;
    }

    const ordenado = bubbleSort(array.slice()); // usamos slice() para no mutar original si lo necesitas
    resultadoCont.innerHTML = `Vector ordenado: [ ${ordenado.join(", ")} ]`;
}
function multiply(a, b) {
    return a * b;
}

function analyzeArray(arr, operation) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result = operation(result, Number(arr[i]));
    }
    return result;
}

export function procesarProducto() {
    const input = document.getElementById("productInput").value;
    const resultadoDiv = document.getElementById("resultado"); // Usar el div principal
    resultadoDiv.innerHTML = ""; // Limpiar resultado previo

    if (!input.trim()) {
        const p = document.createElement("p");
        p.textContent = "Error: Debes ingresar valores.";
        resultadoDiv.appendChild(p);
        return;
    }

    const array = input.split(",").map(x => x.trim());
    if (array.some(v => isNaN(v) || v === "")) {
        const p = document.createElement("p");
        p.textContent = "Error: Todos los valores deben ser numéricos.";
        resultadoDiv.appendChild(p);
        return;
    }

    const producto = analyzeArray(array, multiply);
    const p = document.createElement("p");
    p.textContent = `Producto total: ${producto}`;
    resultadoDiv.appendChild(p);
}
function countVowels(letters) {
    const vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for (let i = 0; i < letters.length; i++) {
        const letra = String(letters[i]).toLowerCase();
        if (vocales.includes(letra)) contador++;
    }

    return contador;
}

function updateCounter(count) {
    return `Cantidad de vocales encontradas: ${count}`;
}

export function contarVocales() {
    // Asegurar contenedores de salida
    let salida = document.getElementById("resultado20");
    if (!salida) {
        salida = document.createElement("div");
        salida.id = "resultado20";
        // preferimos anexarlo dentro del contenedor general #resultado si existe
        const main = document.getElementById("resultado") || document.body;
        main.appendChild(salida);
    }

    let contadorEl = document.getElementById("contador20");
    if (!contadorEl) {
        contadorEl = document.createElement("div");
        contadorEl.id = "contador20";
        const main = document.getElementById("resultado") || document.body;
        main.appendChild(contadorEl);
    }

    // Obtener input
    const inputEl = document.getElementById("lettersInput");
    if (!inputEl) {
        salida.textContent = "Error: falta el input con id 'lettersInput'.";
        contadorEl.textContent = "";
        return;
    }

    const raw = inputEl.value.trim();
    if (raw === "") {
        salida.textContent = "Error: Debes ingresar letras separadas por comas.";
        contadorEl.textContent = "";
        return;
    }

    // Convertir a array y limpiar elementos vacíos
    const letters = raw
        .split(",")
        .map(l => l.trim())
        .filter(l => l !== "");

    if (letters.length === 0) {
        salida.textContent = "Error: no se encontraron elementos válidos.";
        contadorEl.textContent = "";
        return;
    }

    const totalVocales = countVowels(letters);
    const mensajeContador = updateCounter(totalVocales);

    salida.textContent = `Vocales encontradas: ${totalVocales}`;
    contadorEl.textContent = mensajeContador;
}