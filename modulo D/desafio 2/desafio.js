function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value >ano){
        window.alert('verifique novamente os dados colocados!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex [0].checked){
        genero = 'homem'
        if (idade >=0 && idade <10){
            //crianca
            img.setAttribute('src', 'bebehomen.jpg')
        }else if(idade >=10 && idade<21){
            //jovem
            img.setAttribute('src', 'homenjovem.jpg')
        }else if (idade >=21 && idade <50){
            //adulto
            img.setAttribute('src', 'adultohomen.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'idosohomen.jpg')
        }
       }else if (fsex[1].checked){
        genero ='mulher'
         if (idade >=0 && idade <10){
            //crianca
            img.setAttribute('src', 'bebemulher.jpg')
        }else if(idade >=10 && idade<21){
            //jovem
            img.setAttribute('src', 'mulherjovem.jpg')
        }else if (idade >=21 && idade <50){
            //adulto
            img.setAttribute('src', 'mulheradulto.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'idosamulher.jpg')
        }
       }
       res.innerHTML = `detectamos genero: ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}