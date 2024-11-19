function contarVelasMaisAltas(velas) {
    let MaxAltura = 0
    let contador = 0
    for (let i = 0; i < velas.length; i++) {
        if (velas[i] > MaxAltura) {
            MaxAltura = velas[i]
            contador = 1
        } else if (velas[i] === MaxAltura) {
            contador++
        }
    }
    return contador
}
let array = [5,6,7,8,9,9,9]
console.log(contarVelasMaisAltas(array))