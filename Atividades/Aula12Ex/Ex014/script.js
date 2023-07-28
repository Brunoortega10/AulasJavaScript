function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'Manha.jpg'
        document.body.style.background = '#cf6c27'
    }else if (hora >=12 && hora <= 18){
        //Boa Tarde
        img.src = 'Tarde.jpg'
        document.body.style.background = '#cfa7a0'
    }else{
        //Boa Noite
        img.src = 'Noite.jpg'
        document.body.style.background = '#243151'
    }
}