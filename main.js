// PUNTO 1

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

meses.forEach(element => {
    console.log(element)
});

// PUNTO 2

function parImpar(numero) {
    if ((numero % 2) == 0) {
        return console.log("El numero es par")
    } else {
        return console.log("El numero es impar")
    }
}

parImpar(10);

// PUNTO 3

let cadena = prompt ("Escribe algo con mayúsculas y minúsculas.");

function numero(cadena){
    let may=0;
    let min=0;
    let letra = cadena.split("");

    for(let i = 0; i < cadena.length; i++){
        if(letra[i]!= " "){
            if(letra[i] == (letra[i].toUpperCase())) {
                may++;    
            }
            if(letra[i] == letra[i].toLowerCase()) {
                min++;
            }
        }    
    }

    console.log(cadena)
    console.log("El numero de mayúsculas que hay: "+may);
    console.log("El numero de minusculas que hay: "+min);
}
numero(cadena);

// PUNTO 4

let n = prompt("Introduce un número y se mostrará su factorial");
let resultado = 1;

for(let i=1; i<=n; i++) {
  resultado *= i;
}
console.log(resultado);