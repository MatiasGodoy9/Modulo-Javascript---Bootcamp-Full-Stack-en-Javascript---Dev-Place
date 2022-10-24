// Primer consigna

const iva = 10;

const producto = 10000;

let ivaProducto = producto * iva / 100;

let compraFinal = producto + ivaProducto;

console.log("El valor del producto final es: " + compraFinal);

// Segunda consigna

let resp = prompt("¿Cuantos creditos quiere comprar? (En caso de no querer ninguno ingrese 0");

switch (resp) {
    case '1':
        console.log('Tiene acceso a Consolas');
        break;
    case '2':
        console.log('Tiene acceso a Consolas y juegos 2D');
        break;
    case '3':
        console.log('Tiene acceso a Consolas, juegos 2D y juegos 3D');
        break;
    case '4':
        console.log('Tiene acceso a consolas, juegos 2D, juegos 3D y realidad virtual');
        break;
    case '0':
        console.log('Chau');
        break;
}

// Tercera consigna

/* const coche = prompt("¿Que tipo de coche desea? 1 - gasolina, 2 - diesel, 3 - electrico");

if (coche == '1' || 'gasolina') {
    console.log("dirigirse a la oficina 100")
} else if (coche == '2' || 'diesel') {
    console.log("Dirigirse a la oficina 200")
} else if (coche == '3' || 'electrico') {
    console.log("Dirigirse a la oficina 300")
} else {
    console.log("Respuesta incorrecta")
} */