const form = document.querySelector('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (Number(campoB.value) > Number(campoA.value)) {
    resultadoDiv.innerHTML = '<p>Formulário válido!</p>';
  } else if (Number(campoB.value) == Number(campoA.value)){
    resultadoDiv.innerHTML = '<p>Os dois números são iguais. Formulário inválido!</p>';
  }
  
  
  else {
    resultadoDiv.innerHTML = '<p>Formulário inválido!</p>';
  }
});
