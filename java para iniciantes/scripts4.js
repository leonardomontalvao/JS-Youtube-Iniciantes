//if..else
// Se ahora estgiver entre as 6 as 12 : bom dia
// se estiver 12 as 18, boa tarde
// caso contrario boa noite


let hora = 22;

if (hora >= 06 && hora <= 12) {
    console.log(`Bom dia, são aproximadamente ${hora} horas`);

} else if (hora <= 18) {
    console.log(`Boa Tarde, são aproximadamente ${hora} horas`);

} else {

    console.log(`Boa Noite, são aproximadamente ${hora} horas`);
}