// Divisível por3=>Fizz  
// Divisível por5=>Buzz
// Divisível por3e5=>FizzBuzz
// Não divisível por3ou5=>entrada
// Não é um número=>'Não éu m número'
const resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'não é um número'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;




}