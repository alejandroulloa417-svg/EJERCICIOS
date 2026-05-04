import {
    saludar,
    despedir,
    estadosistema,
    sumar,
    restar,
    healthCheck,
    removeDuplicates,
    bubbleSort,
    countVowels
} from "../src/app.js";

describe("Pruebas generales", () => {

    test("Saludar", () => {
        expect(saludar("Raider")).toContain("Raider");
    });

    test("Estado sistema", () => {
        expect(estadosistema().estado).toBe("activo");
    });

    test("Sumar", () => {
        expect(sumar(2,3)).toBe(5);
    });

    test("Restar", () => {
        expect(restar(5,3)).toBe(2);
    });

    test("Health Check", () => {
        expect(healthCheck().status).toBe("ok");
    });

});

describe("Pruebas de arrays", () => {

    test("Eliminar duplicados", () => {
        expect(removeDuplicates([1,2,2,3,4,4]))
            .toEqual([1,2,3,4]);
    });

    test("Ordenar vector", () => {
        expect(bubbleSort([5,1,4,2]))
            .toEqual([1,2,4,5]);
    });

    test("Contar vocales", () => {
        expect(countVowels(["a","b","e","x","i"]))
            .toBe(3);
    });

});