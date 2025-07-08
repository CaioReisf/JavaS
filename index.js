function calcular() {
      let altura = document.getElementById('anum');
      let peso = document.getElementById('pnum');
      let res = document.getElementById('res');

      res.className = ''; // Limpa classe anterior

      if (altura.value.length == 0 || peso.value.length == 0) {
        alert('Preencha os campos com os seus dados!');
        return;
      }

      let imc = Number(peso.value) / (Number(altura.value) ** 2);
      let nivel = '';
      let classe = '';
      let emoji = '';

      if (imc <= 18.5) {
        nivel = 'Magreza';
        classe = 'magreza';
        emoji = '⚠️';
      } else if (imc <= 24.9) {
        nivel = 'Normal';
        classe = 'normal';
        emoji = '💪';
      } else if (imc <= 29.9) {
        nivel = 'Sobrepeso';
        classe = 'sobrepeso';
        emoji = '⚠️';
      } else if (imc <= 39.9) {
        nivel = 'Obesidade Grau 1';
        classe = 'obesidade1';
        emoji = '🚨';
      } else {
        nivel = 'Obesidade Grau 2 ou mais';
        classe = 'obesidade2';
        emoji = '🚨🚨';
      }

      res.classList.add(classe);
      res.innerHTML = `
        Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
        Nível Corporal: <strong>${nivel}</strong> ${emoji}
      `;
    }