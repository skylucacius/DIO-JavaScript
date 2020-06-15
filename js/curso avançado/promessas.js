escreve = (texto) => console.log(texto)

const promise1 = new Promise((resolve,reject) => setTimeout(() => resolve('promise 1'),5000))
const promise2 = new Promise((resolve,reject) => setTimeout(() => resolve('promise 2'), 1000))

// //comportamento padrão: assícrono
// promise1.then(dado1 => {escreve(dado1); throw new erroNaoDefinido }).catch((erro) => escreve('Deu erro aqui > ' + erro))
// promise2.then(dado2 => escreve(dado2))

// //Executa somente após todas as promessas forem resolvidas
// Promise.all([promise1,promise2]).then((data) => {
//     escreve(data[0])
//     escreve(data[1])
// })

// //Executa a primeira promessa resolvida ... porém a definição das promises ainda consome o tempo necessário da maior delas
// Promise.race([promise1,promise2]).then((dado) => {escreve(dado)})

