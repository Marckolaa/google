function somatorio(arr) {
    let soma = 0
    let i = 0
    while (i < arr.length) {
        soma += arr[i]
        i++
    }
    return soma
}
let array = [2,3,4,5,6]
console.log(somatorio(array))