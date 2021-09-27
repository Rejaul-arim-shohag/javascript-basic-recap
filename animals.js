
function animalCount(roadKm) {
    let animal = 0;
    if (roadKm <= 10) {
        animal = roadKm * 50;
        console.log(animal);
    } else if (roadKm <= 20) {
        const firstPart = 10 * 50;
        const remaining = roadKm - 10;
        const secondPart = remaining * 100;
        animal = firstPart + secondPart;
        console.log(animal);
    } else {
        const firstPart = 10 * 50;
        const secondPart = 10 * 100;
        const remaining = roadKm - 20;
        const thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

const rejaulKm = 25;
const rejaulKarimCount = animalCount(rejaulKm);
console.log(rejaulKarimCount)



