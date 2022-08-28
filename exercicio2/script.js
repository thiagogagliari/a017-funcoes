//a
const numeros = somaNumeros(2,10)

function somaNumeros(n1,n2){
    return n1+n2
}
console.log(numeros)

//b
const numbers = booleano(25,60)

function booleano(num1, num2) {
    if(num1 >= num2){
        console.log(true)
    } else(
        console.log(false)
    )   
}

//c

const verificadorPar = numPar(3)

function numPar(numeros) {
    if(numeros%2 === 0){
        console.log("Número Par")
    } else(
        console.log("Não é um número par!")
    )
}

//d
const mensagem = "Deus é fiel"

const string = (mensagem) => {
    console.log(`O tamanho da string é: ${mensagem.length}`)
console.log(`Versão com letras maiúsculas: ${mensagem.toUpperCase()}`)
}

string(mensagem)
