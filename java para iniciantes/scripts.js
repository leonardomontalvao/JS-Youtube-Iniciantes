// sobre funções 
let corSite = 'azul';

function resetarCor(cor, tonalidade) {
    corSite = cor + tonalidade;
};

console.log(corSite);
resetarCor('verde', '  claro');
console.log(corSite);

//tipos de função

//realiza uma tarefa e não devolve nada 
function dizernome() {
    console.log('montalvão');

}
dizernome()

// faz um calculo ou uma operação e retorna algo

function multiplicarPorDois(valor) {
    return valor * 2;
}
// console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5)
console.log(resultado);

//operadores aritimeticos, 
// atribuição
// comparação
// lógicos
//bitwise