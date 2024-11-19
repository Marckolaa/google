let array = [4, 5, 4, 5]
let maxIndex = array.indexOf(Math.max(...array)) //IndexOf traz a primeira ocorrencia de algo e o Math.max(...array) é para buscar o primeiro maior numero do array
console.log(maxIndex)