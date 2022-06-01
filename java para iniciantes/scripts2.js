//operadores aritimeticos
let salario = 100;
console.log(salario + salario + salario);

// incremento e decremento
let idade = 18
console.log(++idade);
console.log(--idade);

//operadores de atribuição

let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer
console.log(valorTecladoGamer);

// operadores de igualdade 
// igualdade estrita === valor e tipo]

console.log(1 === 1);
console.log('1' === 1);

// igualde solta 
console.log(1 == 1);
console.log('1' == 1);

// operador ternario

//tem um cliente, 100 premium, comum

let ponto = 150;
let tipo = ponto > 100 ? 'premium' : 'comum'
console.log('este cliente é : ' + tipo);

// operadores logicos 
// e(&&) retor true se os dois forem verdadeiros
console.log(true && true);

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

//operador ou (||)

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// operador not (!)
let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);

// comparação logica com valores não buleanos
let corPersonalizada = '';
let corPadrao = "azul";
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil);

// trocando valores de variaveis