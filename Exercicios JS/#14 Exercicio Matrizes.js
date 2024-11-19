function capitalizarVogais(n) {
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n[i].length; j++) {
            if (n[i][j] === "a") {
                n[i][j] = n[i][j].toUpperCase()
            } else if (n[i][j] === "e") {
                n[i][j] = n[i][j].toUpperCase()
            } else if (n[i][j] === "i") {
                n[i][j] = n[i][j].toUpperCase()
            } else if (n[i][j] === "o") {
                n[i][j] = n[i][j].toUpperCase()
            } else if (n[i][j] === "u") {
                n[i][j] = n[i][j].toUpperCase()
            }
        } 
    }
    return n
}
// A E I O U

const matriz = [
    ['a', 'x', 'e', 'p', 'o'],
    ['b', 'q', 'z', 'b', 's'],
    ['r', 't', 'h', 'r', 't'],
    ['i', 'k', 'j', 'k', 'c'],
    ['n', 'u', 'v', 'l', 'v'],
    ['a', 'e', 'i', 'o', 'u']
]

console.log(capitalizarVogais(matriz))