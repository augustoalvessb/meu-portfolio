const calcular = document.querySelector(".calcular");

function taxaMetabolicaBasal() {
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  const idade = document.querySelector("#idade").value;
  const resultado = document.querySelector(".resultado");
  const genero = document.getElementsByName("genero");

  let taxaMetabolicaMasculina = 66 + 13.7 * peso + 5.0 * altura - 6.8 * idade;
  let taxaMetabolicaFeminina = 665 + 9.6 * peso + 1.8 * altura - 4.7 * idade;

  //Taxa metabolica diaria aproximada 
  // taxaMetabolicaMasculina = taxaMetabolicaMasculina + (taxaMetabolicaMasculina - 20 / 100);  
  // taxaMetabolicaFeminina = taxaMetabolicaFeminina + (taxaMetabolicaFeminina - 20 / 100);

  if (peso !== "" && altura !== "" && idade !== "") {
    if (genero[0].checked) {
      resultado.innerHTML = taxaMetabolicaMasculina.toFixed(2) + "cal";
    } else if (genero[1].checked) {
      resultado.innerHTML = taxaMetabolicaFeminina.toFixed(2) + "cal";
    }
  } else {
    resultado.innerHTML = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", taxaMetabolicaBasal);
