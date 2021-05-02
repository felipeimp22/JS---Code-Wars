function highAndLow(numbers) {
    let arrSplit = numbers.split(' ')
    return `${Math.max(...arrSplit)} ${Math.min(...arrSplit)}`
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))