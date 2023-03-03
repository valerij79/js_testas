console.log('6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.');

let masyvas = [];
let ilgis = Math.floor(Math.random() * 11) + 20;

for (let i = 0; i < ilgis; i++) {
    let skaicius = Math.floor(Math.random() * 21) + 10;
    masyvas.push(skaicius);
}

let didziausias = masyvas[0];

for (let i = 1; i < masyvas.length; i++) {
    if (masyvas[i] > didziausias) {
        didziausias = masyvas[i];
    }
}

console.log('Masyvas: ' + masyvas);
console.log('Didziausia reiksme: ' + didziausias);
