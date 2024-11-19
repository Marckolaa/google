function teoremaDePitagoras(c1, c2) {
    let lado1 = c1 ** 2
    let lado2 = c2 ** 2
    let soma = lado1 + lado2
    hipotenusa = soma ** 0.5
    return hipotenusa
}
console.log(teoremaDePitagoras(5,5))