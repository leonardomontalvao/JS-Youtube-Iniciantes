// Escreva uma função que usa 2 numeros e retorna o maior entre eles

let a = 12;
let b = 12

if (a > b) {

    console.log(` o numero maior é ${a}`);

} else {
    console.log(` o numero maior é ${b}`);
}

//outro jeito

let valorMaior = max(20, 12)
console.log(` o numero maior é ${valorMaior}`);

function max(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}