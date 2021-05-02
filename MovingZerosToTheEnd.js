// var moveZeros = function (arr) {
//     let zeroArr = []
//     arr.forEach((element, index) => {
//         if (element == 0) {
//             zeroArr.push(element)
//             arr.splice(index, 1)
//         }
//     });

//     return arr.concat(zeroArr)
// }


var moveZeros = function (arr) {
    let zeroArr = []
    let value = []
    arr.forEach(element => {
        if (typeof (element) == 'number' && element == 0) {
            zeroArr.push(element)
        } else {
            value.push(element)
        }

    });
    return value.concat(zeroArr)
}
console.log(moveZeros([1, 2, false, 0, 3, [], true, 5, 4]))