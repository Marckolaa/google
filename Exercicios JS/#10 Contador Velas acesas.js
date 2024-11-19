function contaVelasAcesas(velas) {
    let contador = 0
    for (i = 0; i < velas.length; i++) {
        if (velas[i] == true) {
            contador++
        }
    }
    return contador
}
let velasNoBolo = [true,true,true,false,true,false,true,false]
console.log(contaVelasAcesas(velasNoBolo))