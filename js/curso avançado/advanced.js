
const promise1 = new Promise((resolve,reject) => setTimeout(() => resolve('promise 1'),3000))
const promise2 = new Promise((resolve,reject) => setTimeout(() => resolve('promise 2'), 2000))

promise1.then((data) => console.log(data))
promise2.then((data2) => console.log(data2))

// Promise.all([Promise1(),Promise2()]).then((data) => {
//     console.log(data[0])
//     console.log(data[1])
// })

// Promise.race([Promise1(),Promise2()]).then((data) => {console.log(data)})
// fetch('https://api.github.com/users/skylucacius')
// console.log('teste')
// fetch('http://127.0.0.1:5500/js/assets/data.json')
// .then((responseStream) => {
//     if (responseStream.status == 200) 
//         return responseStream.json()
//     else 
//         throw new Error('Vixe ... deu erro!')
// }).then((data) => escreve(data)).catch(err => console.log('O erro é: ',err))

// const asyncTimer = (time) => new Promise((resolve,reject) => setTimeout(() => resolve('resolvi mano!'),time))
// const asyncTimer2 = (time) => new Promise((resolve,reject) => setTimeout(() => resolve('resolvi manoOOOO!'),time))

// // //processamento assíncrono de maneira sequencial
// // const simpleFunction = async () => {
// //     const data = await asyncTimer();console.log(data)
// //     const dataJson = await fetch('/js/assets/data.json').then((responseStream) => responseStream.json())
// //     return dataJson
// // }

// //processamento assíncrono de maneira parelela
// const simpleFunction = async () => {
//     // const data = await Promise.all([
//     //     asyncTimer(1000),
//     //     fetch('js/assets/data.json').then((respStream) => respStream.json()),
//     //     asyncTimer2(5000)
//     // ])
//     return data
// }

// simpleFunction().then((dados) => console.log(dados)).catch(erro => escreve(erro))

// const EventEmitter = require('events')
// const emitter = new EventEmitter()


