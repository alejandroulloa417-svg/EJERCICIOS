export function saludar(nombre) {
    return "hola " + nombre + ", bienvenido a aplicacion de codeRider!";
}

export function despedir(nombre) {
    return "hasta pronto, " + nombre + "!codeRider";
}

export function estadosistema() {
    return {
        estado: "activo",
        version: "1.0.0",
        message: "sistema codeRider funcionando correctamente"
    };
}

export function sumar(a, b) {
    return a + b;
}
export function restar(a, b) {
    return a - b;
}

export function healthCheck() {
    return {
        status: "ok",
        timestamp: new Date().toISOString(),
        servicio: "streamflow api",
        version: "1.0.0"
    };
}
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

export function bubbleSort(array) {

    const n = array.length;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - 1; j++) {

            if (array[j] > array[j + 1]) {

                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            }

        }

    }

    return array;
}

export function countVowels(letters) {

    const vocales = ["a", "e", "i", "o", "u"];

    let contador = 0;

    for (let i = 0; i < letters.length; i++) {

        const letra = String(letters[i]).toLowerCase();

        if (vocales.includes(letra)) {
            contador++;
        }

    }

    return contador;
}