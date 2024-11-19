let array = [4, 1, 4, 5]
let equacao = ""
for (i = 0; i < array.length; i++) {
    equacao += array[i]
    if (i < array.length - 1)  {
        equacao += " + "
    }
}
let soma = array.reduce((acc,val) => acc + val,0)
equacao += " = " + soma
console.log(equacao)
/* Callback Function: (acc, val) => acc + val
Aqui, acc é o acumulador e val é o valor atual do array.

A função retorna a soma do acumulador e do valor atual.

Initial Value: 0

O acumulador começa com o valor 0.

Processo de Redução
Vamos ver como o reduce funciona passo a passo para esse exemplo:

Primeira Iteração:

acc (acumulador) = 0 (valor inicial)

val (valor atual) = 4 (primeiro elemento do array)

Novo acc = 0 + 4 = 4

Segunda Iteração:

acc = 4 (resultado da iteração anterior)

val = 1 (segundo elemento do array)

Novo acc = 4 + 1 = 5

Terceira Iteração:

acc = 5 (resultado da iteração anterior)

val = 4 (terceiro elemento do array)

Novo acc = 5 + 4 = 9

Quarta Iteração:

acc = 9 (resultado da iteração anterior)

val = 5 (quarto elemento do array)

Novo acc = 9 + 5 = 14 */