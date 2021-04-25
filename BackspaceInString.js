
/**
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
  exemple: 
  "abc#d##c"      ==>  "ac"
    "abc##d######"  ==>  ""
    "#######"       ==>  ""
    ""              ==>  ""
 */
function clean_string(s) {
    stringSplited = s.split('')
    const result = []
    stringSplited.forEach(element => {
        if (element == "#") return result.pop()

        result.push(element)
    });
    return result.join('') //transforma a array em string sem o join ["a", "c"] com "ac"
}
console.log(clean_string('abc#d##c'))
// console.log(clean_string('abc#d##c')) //ac
// console.log(clean_string('abc####d##c#')) // ""
