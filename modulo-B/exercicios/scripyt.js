function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
        //var hora = data.getHours()
    var hora = 10

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {

        img.innerHTML = '<modulo-B\exercicios\fotomanha.jpg>'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = 'modulo-B\exercicios\fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.innerHTML = "modulo-B\exercicios\fotonoite.jpg"
        document.body.style.background = '#515154'
    }


}