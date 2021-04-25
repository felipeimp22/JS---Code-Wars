// Alt 124   e igual a |
/**
 * -----------------------------------------------------------------------------
 * --------------- Average, ( pega o numero medio faltante) --------------------
 */
//Pegar o resultado que esta faltando na array

// const value = [1, 2, 3, 4, 5, 6, 7, 9, 10]
// const voidArr = []

// function average(arr) {

//     let value = []

//     var length = 0;
//     for (var key in arr) {
//         if (arr.hasOwnProperty(key)) {
//             length++;
//         }
//     }
//     if (arr.lenght > 1) value.push(0)
//     arr.forEach((e, i) => {
//         if (e != 1) {
//             if (e - 1 != arr[i - 1]) { value.push(arr[i] - 1) }
//         }
//     })
//     console.log(length == 0 ? length : value[0])
//     return length == 0 ? length : value[0]
// }

// average(value)

/**
 * -----------------------------------------------------------------------------
 * ----------------------- pega o numero do meio --------------------------------
 */

// function Average2(props) {

//     let arr = props
//     arr.sort((a, b) => {
//         if (a > b) return 1
//         if (a < b) return -1
//         return 0
//     })
//     console.log(arr)

//     console.log(arr[Math.round(arr.length / 2) - 1])
//     return arr

// }

// Average2([40, 1, 20, 10, 2, 22, 33])


/**
 * -----------------------------------------------------------------------------
 * ---------------------- Soma os valores da array -----------------------------
 */
// function sumArr(arr) {
//     const total = arr.reduce((total, currentElement) => total + currentElement)
//     console.log(total)
// }
// sumArr([1, 2, 3, 6])

/**
 * -----------------------------------------------------------------------------
 * ---------------------------- Morse Code -------------------------------------
 */

// decodeMorse = function (morseCode) {
//     value = ''
//     let splitWords = morseCode.split('   ')

//     morse = {
//         ".-": "A",
//         "-...": "B",
//         "-.-.": "C",
//         "-..": "D",
//         ".": "E",
//         "..-.": "F",
//         "--.": "G",
//         "....": "H",
//         "..": "I",
//         ".---": "J",
//         "-.-": "K",
//         ".-..": "L",
//         "--": "M",
//         "-.": "N",
//         "---": "O",
//         ".--.": "P",
//         "--.-": "Q",
//         ".-.": "R",
//         "...": "S",
//         "-": "T",
//         "..-": "U",
//         "...-": "V",
//         ".--": "W",
//         "-..-": "X",
//         "-.--": "Y",
//         "--..": "Z",
//         "-.-.--": "!",
//         ".-.-.-": ".",
//         "...---...": "SOS"

//     }

//     splitWords.forEach(element => {
//         let signString = []
//         let splitCodes = element.split(' ')
//         let str = ''
//         splitCodes.forEach((e, i) => {

//             if (e == "") return
//             str += morse[e]
//         })

//         value += str + " "

//     });
//     let valueLength = value.length
//     return value.slice(0, valueLength - 1).trim()
// }
// // '.... . -.--   .--- ..- -.. .'
// // decodeMorse('.... . -.--   .--- ..- -.. .')
// // decodeMorse('... --- ...')

// let result = decodeMorse('... --- ... -.-.-- / - .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --. .-.-.-')
// console.log(result)

/**
 * -----------------------------------------------------------------------------
 * ---------------------------- factorial  -------------------------------------
 */

// //Recursive
// function rFact(num) {
//     if (num == 0) { return 1; }
//     else { return num * rFact(num - 1); }
// }
// let result = rFact(6)


// //Iterative
// var f = [];
// function factorial(n) {
//     if (n == 0 || n == 1)
//         return 1;
//     if (f[n] > 0)
//         return f[n];
//     return f[n] = factorial(n - 1) * n;
// }
// let result2 = factorial(6)

/**
 * -----------------------------------------------------------------------------
 * --------------- Ordenando Array Em ordem Crescente --------------------------
 *
 */
// function sortArr(props) {
//     let arr = props
//     arr.sort((a, b) => {
//         if (a > b) return 1
//         if (a < b) return -1
//         return 0
//     })
//     console.log(arr)
//     return arr
// }
// sortArr([1, 2, 10, 20, 22, 33, 40])


/**
 * -----------------------------------------------------------------------------
 * Given a sequence of integers, return the sum of all the integers that have an even index,
 * multiplied by the integer at the last index.

    If the sequence is empty, you should return 0.
 *
 */
//Soma todos os numeros pares até chegar no numero do input
// function evenLast(numbers) {
//     let soma = 0;
//     for (let i = 0; i <= numbers; i += 2) {
//         soma += i
//     }
//     return soma;
// }

// function evenLast2(numbers) {
//     if (numbers.length <= 0) return 0
//     let sum = numbers.reduce(function (carry, item) {

//         return item % 2 == 0 ? carry + item : carry;
//     })
//     // if (numbers[0] % 2 != 0) {
//     //     value = numbers[0] > sum ? numbers[0] - sum : sum - numbers[0]
//     // }
//     // value = sum
//     // console.log(value, "-----", "* ", "-----", numbers[numbers.length - 1])
//     if (numbers[0] % 2 != 0) {
//         console.log((numbers[0] > sum ? numbers[0] - sum : sum - numbers[0]) * numbers[numbers.length - 1])
//         return (numbers[0] > sum ? numbers[0] - sum : sum - numbers[0]) * numbers[numbers.length - 1]

//     }
//     console.log(sum * numbers[numbers.length - 1])
//     return sum * numbers[numbers.length - 1]
//     // return value * numbers[numbers.length - 1]
// }

// evenLast2([1, 2, 3, 4, 5])





// if (numbers.length <= 0) return 0
// let sum = numbers.reduce(function (carry, item) {

//     return item % 2 == 0 ? carry + item : carry;
// })

// if (numbers[0] % 2 != 0) {
//     console.log(numbers[numbers.length - 1] % 2 == 0 ? ((numbers[0] > sum ? numbers[0] - sum : sum - numbers[0]) - numbers[numbers.length - 1]) * numbers[numbers.length - 1] : (numbers[0] > sum ? numbers[0] - sum : sum - numbers[0]) * numbers[numbers.length - 1])
//     return numbers[numbers.length - 1] % 2 == 0 ? ((numbers[0] > sum ? numbers[0] - sum : sum - numbers[0]) - numbers[numbers.length - 1]) * numbers[numbers.length - 1] : (numbers[0] > sum ? numbers[0] - sum : sum - numbers[0]) * numbers[numbers.length - 1]

// }
// console.log(numbers[numbers.length - 1] % 2 == 0 ? ((sum - numbers[numbers.length - 1]) * numbers[numbers.length - 1]) : (sum * numbers[numbers.length - 1])
// )
// return numbers[numbers.length - 1] % 2 == 0 ? ((sum - numbers[numbers.length - 1]) * numbers[numbers.length - 1]) : (sum * numbers[numbers.length - 1])




// console.log(evenLast(9))


/**
 * -----------------------------------------------------------------------------
 * ---------------------------- Generate phone Number --------------------------
 *
 */
//dinamic

// function phoneNumber(numbers) {
//    let number = ''
//    function shuffle(array) {
//       const random = Math.floor(Math.random() * array.length + 1);
//       return random
//    }
//    for (let counter = 0; counter < 10; counter++) {
//       number += shuffle(numbers)
//    }

//    return `(${number.substr(0, 3)}) ${number.substr(3, 3)}-${number.substr(6, 4)}`
// }

// console.log(phoneNumber([1, 2, 3, 4]))



// //sequence 

// function phoneNumber(numbers) {
//    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }
// console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// //or

// function createPhoneNumber(numbers){
//    var format = "(xxx) xxx-xxxx";

//    for(var i = 0; i < numbers.length; i++)
//    {
//      format = format.replace('x', numbers[i]);
//    }

//    return format;
//  }

/**
 * -----------------------------------------------------------------------------
 * --------------------- pega apenas os numeros da array -----------------------
 * 
 *In this kata you will create a function that takes a list of non-negative integers
  and strings and returns a new list with the strings filtered out.
 */

function filter_list(l) {
   let arr = []
   l.forEach(e => {
      if (typeof (e) == "number") arr.push(e)
   })
   return arr
}
console.log(filter_list([1, 'b', 2, 3, 'a']))