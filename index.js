// Alt 124   e igual a |
/**
 * -----------------------------------------------------------------------------
 * --------------- Average, ( pega o numero medio faltante) --------------------
 */
// Pegar o resultado que esta faltando na array

// const valueInput = [1, 2, 3, 4, 6, 7, 8, 9, 10]
// const voidArr = []

// function average(arr) {

//    let value = []

//    var length = 0;
//    for (var key in arr) {
//       if (arr.hasOwnProperty(key)) {
//          length++;
//       }
//    }
//    if (arr.lenght > 1) value.push(0)
//    arr.forEach((e, i) => {
//       if (e != 1) {
//          if (e - 1 != arr[i - 1]) { value.push(arr[i] - 1) }
//       }
//    })
//    console.log(length == 0 ? length : value[0] ? value[0] : 0)
//    return length == 0 ? length : value[0] ? value[0] : 0
// }

// average(valueInput)

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

// function filter_list(l) {
//    let arr = []
//    l.forEach(e => {
//       if (typeof (e) == "number") arr.push(e)
//    })
//    return arr
// }
// console.log(filter_list([1, 'b', 2, 3, 'a']))


/**
 * -----------------------------------------------------------------------------
 * ---------------------------- Generate phone Number --------------------------
 *
 */


//  function Player(){}

//  Player.prototype.firstmove = function(cakes){
//    if(cakes == 7){
//  return true

//    }
//    if(cakes == 6){
//  return true

//    }
//    if(cakes == 4){
//  return true

//    }
//    if(cakes == 5){
//  return true

//    }
//    if(cakes == 8){

//  return true
//    }

//  return false
//  }
//  // Decide your next move
//  Player.prototype.move = function(cakes, last){

//    if(cakes == 3) return last == 2 ?  1 : 2

//     if(cakes == 9) return last != 3 ? 3: 2
//     if(cakes == 8) return last != 3 ? 3: 1

//    if(cakes == 5) {
//      if(last ==1 ){
//        return 2
//      }
//       return 3 
//    }

//    if(cakes == 7) last != 1 ?1:2

//    if( cakes ==  4){
//      if(last == 2){
//        return 3
//      }
//       if(last == 3){
//        return 2
//      }
//    }
//    if(cakes == 4) {
//      if(last != 3){

//   return 3
//      }
//      return 2
//        }

//    if(cakes - 1 == 5) return last == 1 ? 2: 1
//    if(cakes - 2 == 5) return last == 2 ? 3: 2
//    if(cakes - 3 == 5) return last == 3 ? 1: 3

//    if(cakes%2 ==0 && cakes> 8 )return last == 2 ?1: 2
//    if(cakes%2 !=0 && cakes> 9) return last == 3 ?1: 3
//    if (last !== 3 && cakes>3)   return 3
//    return last == 1? 2 :1

//  }



//  /**
//   * result
//   * 
//   */
//   Player.prototype.firstmove = function(cakes){
//    if (cakes%4 === 2 || cakes === 1)
//      return false;
//    return true;
//  }

//  Player.prototype.move = function(cakes, last){
//    if (cakes === 2) {
//      return 1;
//    }
//    if (cakes < 6) {
//      if (last === 1){
//        return 3;
//      }else if (last === 2){
//        return 3;
//      }else if (last === 3){
//        return 2;
//      }
//    }
//    if (last === 0) {
//      return ((cakes%4)+2)%4;
//    }else if (last === 1) {
//      return 3;
//    }else if (last === 2) {
//      return (cakes%4) === 1 ? 3 : 1;
//    }else if (last === 3) {
//      return (cakes%4) === 0 ? 2 : 1;
//    }
//  }

//    or

// function Player(){}

// Player.prototype.firstmove = function(cakes){
// return cakes % 4 != 2 && cakes != 1 
// }
// // Decide your next move
// Player.prototype.move = function(cakes, last){
// return cakes % 4 == 0 ? (last == 3 ? 2 : 3) : (cakes + 2) % 4
// }

/**
 * -----------------------------------------------------------------------------
 * ---------------------------- '#' is backSpace --------------------------
 *
 *
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
   Your task is to process a string with "#" symbols.

   exemples:
   "abc#d##c"      ==>  "ac"
   "abc##d######"  ==>  ""
   "#######"       ==>  ""
   ""              ==>  ""
 */

// function cleanString(s) {
//    let stringSplited = s.split('')
//    let value = ''
//    var indexes = [], i = -1;
//    while ((i = stringSplited.indexOf("#", i + 1)) != -1) {
//       indexes.push(i);
//    }
//    while (stringSplited.indexOf("#") != -1) {
//       console.log(stringSplited)
//       let verifyIfvalidCaracteresExists = stringSplited.filter(e => e != "#")
//       if (verifyIfvalidCaracteresExists.length <= 0) stringSplited.splice(0)
//       indexes.forEach(e => {
//          if (stringSplited[e - 1] == "#") return
//          stringSplited.forEach((el, i) => {
//             if ((el) == "#") { stringSplited.splice(i - 1, 2) }
//          })

//          stringSplited.splice(e - 1, 2)

//       })

//    }

//    stringSplited.forEach(e => { if (e != "#") { value += e } })

//    return value
// };




// function cleanString(s) {
//    let stringSplited = s.split('')
//    let value = ''

//    while (stringSplited.indexOf("#") != -1) {

//       stringSplited.forEach((e, i, arr) => {
//          if (e == "#") {
//             if (arr[i - 1] != "#") {
//                stringSplited.splice(i - 1, 2)
//             }
//          }

//       })

//    }
//    stringSplited.forEach(e => value += e)

//    return value
// };

// console.log(cleanString('6+yqw8hfklsd-=-f#'))

// function clean_string(s) {
//    stringSplited = s.split('')
//    const result = []
//    stringSplited.forEach(element => {
//       if (element == "#") return result.pop()

//       result.push(element)
//    });
//    return result.join('') //transforma a array em string sem o join ["a", "c"] com "ac"
// }
// console.log(clean_string('abc#d##c'))



// var arr = [1, 20, 3, 4, 5];
// var max = arr.reduce(function (a, b) {
//    return Math.max(a, b);
// });
// console.log(max)






// var troco = 10;

// function calcularTroco() {
//   var notas = [10, 5, 2];
//   arr = new Array();

//   for (x in notas) {
//     if (notas[x] > troco) continue;

//     var quantidadeCedula = parseInt(troco / notas[x]);
//     arr.push([quantidadeCedula, notas[x]]);

//     troco = troco - (quantidadeCedula * notas[x]);
//   }

//   return arr;
// }
// console.log(calcularTroco(42));


// Me desculpe

// function change(n) {
//   let ten = 0, five = 0, two = 0

//   if ((n / 10) % 1 != 0 && (n / 10) >= 1) {
//     ten += Math.trunc(n / 10)
//     if (((n / 10) - Math.trunc(n / 10)) >= 0.19 && ((n / 10) - Math.trunc(n / 10)) < 0.49) {
//       two += 1
//       return { ten, five, two }
//     }
//     if (((n / 10) - Math.trunc(n / 10)) >= 0.5) {
//       five += 1
//       if (((n / 10) - Math.trunc(n / 10)) >= 0.69) two += 1
//       return { ten, five, two }
//     }
//   }
//   if ((n / 5) % 1 != 0 && (n / 5) >= 1) {
//     five += Math.trunc(n / 5)
//     if (((n / 5) - Math.trunc(n / 5)) >= 0.39) {
//       if (((n / 5) - Math.trunc(n / 5)) >= 0.79) {
//         two += 2
//         return { ten, five, two }
//       }
//       two += 1
//       return { ten, five, two }
//     }
//   }

//   if ((n / 10) % 1 == 0) {
//     ten += n / 10
//     return { ten, five, two }
//   }
//   else if ((n / 5) % 1 == 0) {
//     five += n / 5
//     return { ten, five, two }
//   }
//   else if ((n / 2) % 1 == 0) {
//     two += n / 2
//     return { ten, five, two }
//   }
//   return {
//     ten,
//     five,
//     two
//   }
// }
// console.log(change(48))

function highAndLow(numbers) {
  let arrSplit = numbers.split(' ')
  return `${Math.max(...arrSplit)} ${Math.min(...arrSplit)}`
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))