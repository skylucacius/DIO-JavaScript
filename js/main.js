// var n1 = 5
// var n2 = 3
// frase = 'Japão é o melhor time do mundo'
// console.log(frase.replace('Japão','Brasil'))

// var fruta = [   {nome: 'banana', cor:'amarela'}, 
//                 {nome:'maçã', cor:'vermelha'}]
// console.log(fruta[0].cor)

// idade = 18
// if (idade >= 18) {
//     alert('Maior de idade')
// } else {
//     alert('Menor de idade')
// }

// for (var count = 0; count < 5; count++) {
//     alert(count)
//     console.log(count)
// }

// var count = 0
// while (count < 5) {
//     alert(count)
//     console.log(count)
//     count++
// }

// function soma(a, b) {
//     return a + b
// }

// function trocaNome(frase, str1, str2) {
//     return frase.replace(str1, str2)
// }
// alert(soma(2,3))
// alert(trocaNome('Vai Japão', 'Japão', 'Brasil'))

// function validaIdade(idade) {
//     var idade
//     if (idade >=18) {
//         return idade = true
//     }
//     else {
//         return idade = false
//     }
    
// }

// idade = prompt('Qual é a sua idade ?')
// alert(validaIdade(idade))

function clicou() {
    document.getElementById('agradecimento').innerHTML = '<i>Obrigado por clicar</i>'
}

function redirecionar() {
    // window.open('https://yugioh.fandom.com/wiki/Millennium_Items')
    window.location.href = 'https://yugioh.fandom.com/wiki/Millennium_Items'
}

function troca(elemento) {
    elemento.innerHTML = 'Valeu'
}

function volta(elemento) {
    elemento.innerHTML = 'Obrigado por clicar'
}

function mudouValor(elemento) {
    console.log(elemento.value)
}