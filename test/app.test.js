import { saludar, despedir, estadosistema , sumar, restar, healthCheck } from "../src/app.js"

function ejecutarpruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Raider")
    if (r1.includes("Raider")) {
        console.log("test 1 pasado: funcion saludar en codeRaider es correcta");
        pasadas++;
    } else {
        console.log("test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadosistema();
    if (actualEstado.estado === "activo") {
        console.log("test 2: pasado: estadosistema() funciona en coderider");
        pasadas++;
    } else {
        console.log("test 2 fallido: ", estado, "en codeRider");
        fallidas++;
    }
    
 
    if (fallidas > 0) process.exit(1); "fallidas"
    const resultadoSuma = sumar(2, 3);
    if (resultadoSuma === 5) {
        console.log("test 3: pasado: sumar(2, 3) devuelve 5 en codeRider");
        pasadas++;
    } else {
        console.log("test 3 fallido: sumar(2, 3) devuelve ", resultadoSuma, "en codeRider");
        fallidas++;
    }
    const resultadoResta = restar(5, 3);
    if (resultadoResta === 2) {
        console.log("test 4: pasado: restar(5, 3) devuelve 2 en codeRider");
        pasadas++;
    } else {
        console.log("test 4 fallido: restar(5, 3) devuelve ", resultadoResta, "en codeRider");
        fallidas++;
    }
    const health = healthCheck();
    if (health.status === "ok") {
        console.log("test healthCheck: pasado");
        pasadas++;
    } else {
        console.log("test healthCheck: fallido", health);
        fallidas++;
    }
    console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + "fallidas");
}

ejecutarpruebas();
