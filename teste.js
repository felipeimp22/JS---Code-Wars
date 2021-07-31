const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = ["a", "b", "c"]

arr1.forEach((e, i) => {
    let key = arr2[i]
    console.log({
        arr1: e,
        arr2: key
    })
})