function tempoEmPalavras(h, m) {
    const horas = {
        0:"meia noite",
        1:"um",
        2:"dois",
        3:"três",
        4:"quatro",
        5:"cinco",
        6:"seis",
        7:"sete",
        8:"oito",
        9:"nove",
        10:"dez",
        11:"onze",
        12:"meio dia",
        13:"uma",
        14:"duas",
        15:"três",
        16:"quatro",
        17:"cinco",
        18:"seis",
        19:"sete",
        20:"oito",
        21:"nove",
        22:"dez",
        23:"onze",
    }
    const minutos = {
        1:"um",
        2:"dois",
        3:"três",
        4:"quatro",
        5:"cinco",
        6:"seis",
        7:"sete",
        8:"oito",
        9:"nove",
        10:"dez",
        11:"onze",
        12:"doze",
        13:"treze",
        14:"catorze",
        15:"um quarto",
        16:"dezesseis",
        17:"dezessete",
        18:"dezoito",
        19:"dezenove",
        20:"vinte",
        21:"vinte e um",
        22:"vinte e dois",
        23:"vinte e três",
        24:"vinte e quatro",
        25:"vinte e cinco",
        26:"vinte e seis",
        27:"vinte e sete",
        28:"vinte e oito",
        29:"vinte e nove",
        30:"meia",
    }
    if (m === 0) {
        return `${horas[h]} em ponto`
    } else if (m <= 30) {
        return `${horas[h]} e ${minutos[m]}`
    } else {
        let proximaHora = (h + 1) % 24
        let minutosRestantes = 60 - m
        if (proximaHora === 0) {
            return `${minutos[minutosRestantes]} para meia noite}`
        }  else if (proximaHora === 12) {
            return `${minutos[minutosRestantes]} para o meio dia`
        } else {
            return `${minutos[minutosRestantes]} para as ${horas[proximaHora]}`
        }
    }
}

console.log(tempoEmPalavras(14,47))