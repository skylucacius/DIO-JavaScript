// function fn() {
//     console.log(texto);
//     var texto = 'abc';
//     console.log(texto)
// }

// fn();
// console.log('resto'.substr(3,-1))
// console.log('resto'.slice(3,-2))
// console.log('resto'.substring(3,-2))

// function Animal(name) {
//     this.name = name
// }

// cabra = new Animal('cabra')
// console.log(cabra)

// function Animal(name) {
//     return {name: name}
// }
// cabra = new Animal('cabra')
// console.log(cabra)
// function Animal() {}
// Animal.prototype.qtdepatas = 0
// Animal.prototype.movimentar = function() {}
// function Cachorro(morde) {
//     this.qtdepatas = 4
//     this.morde = morde
// }
// Cachorro.prototype = Object.create(Animal)
// Cachorro.prototype.latir = Object.call(this)
// const pug = new Cachorro(false)
// const pitbull = new Cachorro(true)
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName = () => {return this.name}//ou getName = function () {return this.name} 
//     setName = (name) => {this.name = name}//ou setName = function (name) {this.name = name}
// }
// mario = new Person('Mário')
// console.log(mario)
// console.log(mario.getName())
// mario.setName('Lucas')
// console.log(mario.getName())
// class Person  {
//     #name = ''
//     constructor(name) {
//         this.#name = name
//     }
//     get name() {return this.#name}
//     set name(name){
//         this.#name = name
//     }
//     static anda(){
//         console.log('caminhando ...')
//     }
// }
// var p = new Person('Mário')
// console.log(p.name)
// p.name = 'Lucas'
// console.log(p.name)
// Person.anda()
// p.anda()
// const arr = [1,2,3,4,5]
// const arr2 = [4,'cinco',6]
// arr3 = Array.of(7,'oito',9)
// arr4 = new Array(10,'onze',12.7)
// arr5 = new Array(13,14,15)
// console.log(arr)
// console.log(arr.splice(2))
// console.log(arr)
// console.log(arr3)
// console.log(arr4)
// console.log(arr5)
// arr3 = [5,6,7,8]
// const novoArray = arr3.findIndex(value => value >= 7)
// console.log(novoArray)