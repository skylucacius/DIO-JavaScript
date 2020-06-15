const escreve = (texto) => console.log(texto); 
// const fetch = require('node-fetch'); 
// const xfetch = require('cross-fetch')
// const outroFetch = require("isomorphic-fetch")

///realiza uma busca num json localizado nesta máquina
// fetch('http://127.0.0.1:5500/js/assets/data.json')
// .then(responseStream => responseStream.json()).then((data) => escreve(data))

//realiza uma busca por meio da API do github
// fetch('https://api.github.com/users/skylucacius')
// .then((responseStream) => {
//     if (responseStream.status == 200) 
//         return responseStream.json()
//     else 
//         throw new Error('Vixe ... deu erro!')
// }).then((data) => escreve(data)).catch(err => console.log('O erro é: ',err))


const asyncTimer = (time) => new Promise((resolve,reject) => setTimeout(() => resolve('resolvi mano!'),time))
const asyncTimer2 = (time) => new Promise((resolve,reject) => setTimeout(() => resolve('resolvi manoOOOO!'),time))

// const simpleFunction = async () => {
//     const data = asyncTimer(5000);escreve(data)
//     const data2 =  asyncTimer2(5500);escreve(data2)
    
//     // const dataJson = await fetch('../assets/data.json').then((responseStream) => responseStream.json())
//     // return dataJson
// }
// simpleFunction()

// // processamento assíncrono de maneira parelela
// const simpleFunction = async () => {
//     const data = await Promise.all([
//         asyncTimer(2000),
//         fetch('../assets/data.json').then((respStream) => respStream.json()),
//         asyncTimer2(3000)
//     ])
//     return data
// }

// simpleFunction().then((dados) => console.log(dados)).catch(erro => escreve(erro))

// const EventEmitter = require('events')
// const emitter = new EventEmitter()


