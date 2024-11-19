function encontraUltimaVelaAcesa(velas) {
    return velas.lastIndexOf(true)
}
let arrayDeVelas = [false,true,false,true,true,true,true] 
console.log(encontraUltimaVelaAcesa(arrayDeVelas))