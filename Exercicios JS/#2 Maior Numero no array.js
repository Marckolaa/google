let array = [4, 1, 4, 5]
let max = Number
max = Math.max(...array) /// ... 3 pontos server para o Math.max poder aceder ao array, pega cada elemento do array e o "espalha" como argumentos separados. [4, 1, 4, 5] se torna 4, 1, 4, 5.
console.log(max)