// const funcaoAssincrona = async (elemento) => {
//     return new Promise((resolve,reject) => setTimeout(() => resolve(elemento + ' - promise'),2000))
//                 .then((dado) => escreve(dado))
// }

// const items = ['a','b','c','d']
// const itemsMapped = items.map(funcaoAssincrona)

const fs = require('fs'); const path = require('path');const { util } = require('chai');
 const basePath = "js/assets"
const escreve = (texto) => console.log(texto)
escreve('início')

// //busca por aquivos sincronamente
// const todosArquivos = fs.readdirSync(path.resolve(basePath))
// const arquivos = todosArquivos.filter((nome) => /s[1-4]\.txt/.test(nome))
// for (const arquivo of arquivos) {
// escreve(fs.readFileSync(path.resolve(basePath,arquivo)).toString() + '\n')
// }

// //busca por arquivos assincronamente
// const todosArquivos = fs.readdirSync(path.resolve(basePath))
// const arquivos = todosArquivos.filter((nome) => /s[1-4]\.txt/.test(nome))
// for (const arquivo of arquivos) {
//  fs.readFile(path.resolve(basePath,arquivo), (erro,dado) => escreve(dado.toString()))
// }
// escreve('fim')


// //lê 1 arquivo sincronamente
//escreve(fs.readFileSync(path.resolve(basePath,'invictus.txt')).toString() + '\n')

// //lê 1 arquivo assincronamente
// fs.readFile( path.resolve(basePath,'invictus.txt'), (erro, dado) => erro ? escreve(erro) : escreve(dado.toString()) )

// //busca por arquivos assincronamente - outra forma, sem promessas
// start(1,4)

// function cb(erro,dado,index,stop) {
//     if (erro) throw erro
//     console.log(dado)
//     return start(index + 1, stop)
// }

// function start(index,stop) {
//     if (index > stop) return console.log('fim')
//     fs.readFile(path.resolve(basePath,`s${index}.txt`), {encoding: 'utf-8'}, (erro,dado) => cb(erro,dado,index,stop) )
// }

// //busca de arquivos assincronamente, com promessas
// function lerArquivoAssincronamente(caminho) {
//     return new Promise((resolve,reject) => {
//         fs.readFile(caminho, (erro,dado) => {
//             if (erro) throw reject(erro)
//             return resolve(dado.toString())
//         })
//     })
// }
// lerArquivoAssincronamente(path.resolve(basePath,'invictus.txt')).then(console.log).catch(console.error)

// //le um arquivo com promisify
// const leAssincronamente = require('util').promisify(fs.readFile)
// leAssincronamente(path.resolve(basePath,'invictus.txt'), {encoding: 'utf-8'}).then(console.log).catch(console.error)
// escreve('fim')

// //busca de arquivos com promisify e array de promessas
const arrayPromessas = []

// //Resolve as promessas desordenadamente (ou seja, da mais rápida a mais lenta)
// const promessa = (tempo) => new Promise((resolve,reject) => setTimeout(dado => resolve(tempo),tempo*1000))
// for (let i=4; i>=1; i--) arrayPromessas.push(promessa(i).then(escreve))

//lê na ordem correta
const leAssincronamente = require('util').promisify(fs.readFile)
const le = (indice) => leAssincronamente(path.resolve(basePath,`s${indice}.txt`),{encoding:"utf-8"})
for (let i=4; i>=1; i--) arrayPromessas.push(le(i))
Promise.all(arrayPromessas).then((arquivo) => escreve(arquivo.join('\n')))
escreve('fim')