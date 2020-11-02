/*
1 - Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, 
devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.
*/
// let qtdNumeros = 6, qtdPositivos = 0;

// for (var i=1; i <= qtdNumeros; i++)
// {
    // let numeroAleatorio = Math.floor(Math.random() * 10)
    // let sinalAleatorio = (-1)**numeroAleatorio
    // numeroAleatorio = sinalAleatorio * numeroAleatorio
    // console.log("\nO valor com sinal é: \n" + numeroAleatorio)
    // if (numeroAleatorio > 0) ++qtdPositivos

    // let valorEntrada = gets()
    // if (valorEntrada > 0) ++qtdPositivos
// }

// console.log(qtdPositivos + ' valores positivos')



// 2 - Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.
// numero = gets()
// for (var parIterador = 2; parIterador <= numero; parIterador += 2) console.log(parIterador)



/* 3 - Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, 
quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são
negativos.*/
// let qtdPositivos = 0; qtdPares = 0; qtdNegativos = 0, qtdNumeros = 5

// for (var iterador = 1; iterador <= qtdNumeros; iterador++) {
//     let valor = Math.floor(10*Math.random()) * ((-1)**(Math.floor(10*Math.random())))
//     console.log(valor)
//     if (valor % 2 == 0) qtdPares += 1
//     if (valor > 0) ++qtdPositivos ;else if (valor <0) ++qtdNegativos
// }

// console.log(
//             qtdPares +' valor(es) par(es)\n' +
//             (qtdNumeros - qtdPares) +' valor(es) impar(es)\n' +
//             qtdPositivos +' valor(es) positivo(s)\n' +
//             qtdNegativos +' valor(es) negativo(s)\n'
//             )

/* 4 - Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas)
 onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
 Na sequência mostre o valor lido e a relação de notas necessárias. */

// valor1 = Math.floor(10*Math.random())
// valor2 = Math.floor(10*Math.random())
// valor3 = Math.floor(10*Math.random())
// valor4 = Math.floor(10*Math.random())
// valor5 = Math.floor(10*Math.random())
// valor6 = Math.floor(10*Math.random())

// valor = 1e5 * valor6 + 1e4 * valor5 + 1e3 * valor4 + 1e2 * valor3 + 1e1 * valor2 + 1e0 * valor1
// valor = 576
// console.log(valor)
// valor = gets()
// console.log(valor)

// Notas100 = Math.floor(valor / 100)  ;valor %= 100
// Notas50 = Math.floor(valor / 50)    ;valor %= 50
// Notas20 = Math.floor(valor / 20)    ;valor %= 20
// Notas10 = Math.floor(valor / 10)    ;valor %= 10
// Notas5 = Math.floor(valor / 5)      ;valor %= 5
// Notas2 = Math.floor(valor / 2)      ;valor %= 2
// Notas1 = Math.floor(valor / 1)      ;

// console.log(
//     (Notas100 + ' nota(s) de R$ 100,00') + '\n' + 
//     (Notas50 +  ' nota(s) de R$ 50,00')  + '\n' + 
//     (Notas20 +  ' nota(s) de R$ 20,00')  + '\n' + 
//     (Notas10 +  ' nota(s) de R$ 10,00')  + '\n' + 
//     (Notas5 +   ' nota(s) de R$ 5,00')   + '\n' + 
//     (Notas2 +   ' nota(s) de R$ 2,00')   + '\n' + 
//     (Notas1 +   ' nota(s) de R$ 1,00')
// )



/* 5 - Você deve calcular o consumo médio de um automóvel onde será informada a distância total 
percorrida (em Km) e o total de combustível consumido (em litros). Você receberá dois valores: 
um valor inteiro X com a distância total percorrida (em Km), e 
um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.*/

let X = 17 //distância total percorrida [km]
let Y = 8.5 //total de combustível consumido [l]

console.log((X / Y).toFixed(3) + ' km/l')
