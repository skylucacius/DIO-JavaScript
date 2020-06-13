function Book(paginas=10){
    this.numberOfPages = paginas
}

function escreve(valor) {
    console.log(valor)
}
// escreve(new Book(25), new Book(13))
// console.log(new Book(25), new Book(13))
// prop1 = 'Digital Innovation One'
// prop2 = 'python é delicinha'
// teste1 = {sum(a,b) { return a + b} }
// escreve(teste1.sum(2,3))
// teste2 = {sum : function (a,b) {return a + b}}
// escreve(teste2.sum(1,2))
// var obj = {prop: 'propriedade inicial'}
// obj[prop1] = prop1
// obj[prop2] = prop2
// obj[teste1] = teste1
// obj[teste2] = teste2
// obj['prop3'] = 'testando novamente ...'
// escreve(obj)

// // var {prop1} = obj; prop1 += '... sei'
// let {prop3: {nome}} = obj
// escreve(prop1)
// escreve(obj.prop1)
// var {prop3: {favoriteColors: [color1, color2, color3]}} = obj
// escreve(color1)
// escreve(color2)
// escreve(color3)
// escreve(arr[0].prop2)
// arr2 = [2,3]
// function sum([a,b] = [0,0]) {
//     return a + b
// }
// escreve(sum([4,5]))
// const arr = [10,20,30,40]
// // it = arr[Symbol.iterator]()

// // while (true) {
// //     let {done, value} = it.next()
// //     escreve(value)
// //     if (done) break
// // }
// for (let value of arr) {
//     escreve(value)
// }
