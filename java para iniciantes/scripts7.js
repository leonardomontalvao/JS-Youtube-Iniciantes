//for-IN

const pessoa = {
    nome: 'leo',
    idade: 29
};

for (let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}


const cores = ['vermelho', 'azul', 'Amarelo'];
for (let indice in cores) {
    console.log(indice, cores[indice]);
}

for (let cor of cores) {
    console.log(cor);
}