function eliminar(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('debe ser un arreglo.');
    }

    return datos.filter(Boolean);
}

let datos = [NaN, 0, 13, false, -11, '', undefined, 101, null, 'dato', '', ' ', ``, '\n', ""]; //"aqui se cambian los valores"
console.log(datos);
console.log(datos.length);  // 15

console.log();

try {
    let resultado = eliminar(datos);
    console.log(resultado);
    console.log(resultado.length);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    resultado = eliminar(100);  // Error
    console.log(resultado);
    console.log(resultado.length);
} catch (e) {
    console.log(`Error: ${e.message}`);
}