function calcular(){
    let altura = document.getElementById('anum')
    let peso = document.getElementById('pnum')
    let res = document.getElementById('res')
    
    if (altura.value.length==0 || peso.value.length==0){
        alert('preencha os campos com os seus dados!')
    } else{
        let imc = Number(peso.value) / Number(altura.value**2)
        res.innerHTML=(`seu IMC eh de ${imc.toFixed(2)}`)
    }

}