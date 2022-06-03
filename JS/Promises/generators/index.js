//Exemplo de função geradora
/* 
function getIdNormal(range) {
    let i = 0

    while (i < range) {
        i++
        return i 
    }
}
function*  getIdGeradora(range) {
    let i = 0

    while (i < range) {
        i++
        yield i
    }
}

let it = getIdGeradora(3)

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) 


let it2 = getIdGeradora(3)

for (let item of it2){
    console.log(item)
}
 */

function* getUniqueId(){
    let i = 0;
    while (true){
        i++;
        yield `Id: ${i}`;
    }
}

const cars = {}
const idCarsGenerator = getUniqueId()

function addCar(car) {
    const id = idCarsGenerator.next().value
    cars[id] = {id, car}
}

addCar("Palio")
addCar("Corsa")
addCar("Uno")
addCar("Siena")
addCar("Hb20")
addCar("Ferrari")

console.log(cars)