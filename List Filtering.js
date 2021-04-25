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