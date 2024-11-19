function ordenaVelasApagadasPrimeiro(velas) {
    let velasApagadas = velas.filter(vela => vela === false)
    let velasAcesas = velas.filter(vela => vela === true)
    let ordem = velasApagadas.concat(velasAcesas)
    return ordem
}
let bolo = [true,true,false,true,false,true]
console.log(ordenaVelasApagadasPrimeiro(bolo))