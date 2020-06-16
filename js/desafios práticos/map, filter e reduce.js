const escreve = (texto) => console.log(texto)
// const pets = 
//     [
//         {name: 'rex',       type:'dog',     age: 4,     weight:5},
//         {name: 'miau',      type:'cat',     age:2,      weight:8},
//         {name: 'gulp',      type:'fish',    age:1,      weight:0.01},
//         {name: 'mug',       type:'dog',     age:5,      weight:15},
//         {name: 'bolinha',   type:'dog',     age:15,     weight:30},
//         {name: 'mingal',    type:'cat',     age:6,      weight:2},
//         {name: 'pé de pano',type:'horse',   age:1,      weight:0.01},
//         {name: 'marrom',    type:'cat',     age:2,      weight:1}
//     ]

// const newPets2 = pets.map(pet => [pet.name , pet.age])
// const forEachPets = [];const netPets3 = pets.forEach(pet => forEachPets.push([pet.name,pet.age + 10]))
// const totalAge = pets.reduce((total,pet) => {
//     return total + pet.age
// },0)
// const totalPet = pets.reduce((total,pet) =>
//     {
//         return {
//         totalAge: total.totalAge + pet.age,
//         totalWeight : total.totalWeight + pet.weight
//         }
//     }, {totalAge:0 , totalWeight:0})
// const dogsWeight = pets.reduce((total,pet) => {
//     if (pet.type == 'dog') {
//         return total + pet.weight
//     }
//     return total
// },0)
// const dogsWeight2 = pets.filter(pet => {return pet.type == 'dog'}).reduce((total,pet) => {return total + pet.weight},0)
// function comecaComM (nome) {
//      if (nome.startsWith('m')) { return true }
// }
// const newPets = pets.filter(({name}) => {
//     return comecaComM(name)
// })
// pets.forEach(value => console.log(value))
// newPets.forEach(value => console.log(value))
// newPets2.forEach(value => console.log(value))
// forEachPets.forEach(value => console.log(value))
// console.log(totalAge)
// console.log(totalPet)
// console.log(dogsWeight)
// console.log(dogsWeight2)

