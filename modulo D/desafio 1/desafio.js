function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas`
    if (hora >=0 && hora < 12){
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background='yellow'
    }else if(hora >= 12 && hora<18){
        //boa tarde
        img.src= 'tarde.jpg'
        document.body.style.background-'lightorange'
    }else{
        //boa noite
        img.src= 'noite.jpg'
        document.body.style.background='darkblue'
    }
}
