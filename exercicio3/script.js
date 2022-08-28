const answer1 = +prompt("VAMOS SOMAR OS NÚMEROS \n Qual seu primeiro número")
const answer2 = +prompt("Qual o outro número")

function soma(n1,n2){
    return n1+n2
}
console.log(`O resutado desta soma é: ${answer1} + ${answer2} = ${soma(answer1,answer2)}`)

//--------------------------

const answer3 = +prompt("VAMOS SUBTRAIR OS NÚMEROS \n Qual seu primeiro número")
const answer4 = +prompt("Qual o outro número")

function sub(n1,n2){
    return n1-n2
}
console.log(`O resultado desta subtração é: ${answer3} - ${answer4} = ${sub(answer3,answer4)}`)

//--------------------------

const answer5 = +prompt("VAMOS MULTIPLICAR OS NÚMEROS \n Qual seu primeiro número")
const answer6 = +prompt("Qual o outro número")

function mul(n1,n2){
    return n1*n2
}
console.log(`O resultado desta multiplicação é: ${answer5} * ${answer6} = ${mul(answer5,answer6)}`)

//--------------------------

const answer7 = +prompt("VAMOS DIVIDIR OS NÚMEROS \n Qual seu primeiro número")
const answer8 = +prompt("Qual o outro número")

function div(n1,n2){
    return n1/n2
}
console.log(`O resultado desta divisão é: ${answer7} / ${answer8} = ${div(answer7,answer8)}`)
