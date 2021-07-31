// Criar uma função que quando chamada da maneira abaixo retone o resultado das strings concatenados
// console.log(concatenator('hello')('world'))

const concatenator = a => b => {
    return `${a + ' ' + b}`
}


console.log(concatenator('hello')('world'))
