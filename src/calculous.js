const firstNumber = Number(prompt('Indique o primeiro número'))
const secondNumber = Number(prompt('Indique o segundo número'))

if (firstNumber && secondNumber) {


const addiction = firstNumber + secondNumber

const subtraction = firstNumber - secondNumber

const multiplication = firstNumber * secondNumber

const division = firstNumber / secondNumber

const remainder = firstNumber % secondNumber

const isEven = number => number % 2 === 0

const isEqual = (firstNumber, secondNumber) => firstNumber === secondNumber

alert(`A soma é ${addiction}`)
alert(`A subtração é ${subtraction}`)
alert(`A multiplicação é ${multiplication}`)
alert(`A divisão é ${division}`)
alert(`O resto da divisão é ${remainder}`)
alert(`O primeiro número é ${isEven(firstNumber) ? 'par' : 'ímpar'}`)
alert(`O segundo número é ${isEven(secondNumber) ? 'par' : 'ímpar'}`)
alert(`Os números ${isEqual(firstNumber, secondNumber) ? 'são iguais' : 'não são iguais'}.`)

}