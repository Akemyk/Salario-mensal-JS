var salarioMensal = parseFloat(prompt("Qual o salário mensal atual do funcionário?"))
var percentualReajuste = parseFloat(prompt("Qual o percentual de reajuste?"))
var novo = (salarioMensal*percentualReajuste/100) + salarioMensal
var novof = novo.toFixed(2)
alert("O salário final é "+novof)