/*

### Celcius em Fahrenheit
  Crie uma funcao que receba uma string em celsius ou fahrenheit e faça a tranformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32
 */

// transform('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C') //uso do to upper para pegar tanto c quanto C
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('grau nao identificado')
  }

  // fluxo ideal, F => C
  let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9 //arrow function
  let degreeSign = 'C'

  //fluxo alternativo C =>
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celcius => (celcius * 9) / 5 + 32 //arrow function
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}
//transformDegree('10C')
try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}
