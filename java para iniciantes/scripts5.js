//swit case
let permissao;
permissao = 'gerente';

switch (permissao) {
    case 'comum':
        console.log('Usuario Comum');

        break;
    case 'gerente':
        console.log('Usuario Gerente');

        break;
    case 'diretor':
        console.log('Usuario Diretor');

        break;

    default:
        console.log('Usuario não reconhecido');
        break;
}