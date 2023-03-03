console.log('7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės.');

let arr = []; // Sukuriame tuščią masyvą
let countA = 0; // Kintamasis, kuris saugos raidės A kiekį
let countB = 0; // Kintamasis, kuris saugos raidės B kiekį
let countC = 0; // Kintamasis, kuris saugos raidės C kiekį
let countD = 0; // Kintamasis, kuris saugos raidės D kiekį

// Sukuriame masyvą, kuris susideda iš atsitiktinių raidžių A, B, C ir D.
for (let i = 0; i < 100; i++) {
    let letter = String.fromCharCode(65 + Math.floor(Math.random() * 4)); // Sugeneruojame atsitiktinę raidę
    arr.push(letter); // Pridedame atsitiktinę raidę į masyvą
}

// Einame per masyvą ir skaičiuojame, kiek yra kiekvienos raidės.
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
        countA++;
    } else if (arr[i] === "B") {
        countB++;
    } else if (arr[i] === "C") {
        countC++;
    } else if (arr[i] === "D") {
        countD++;
    }
}

// Spausdiname visą masyvą.
console.log('Atsitiktiniu raidziu masyvas is 100 simboliu:', arr);

// Spausdiname kiekvienos raidės kiekį.
console.log("Raidė A pasikartojo " + countA + " kartų.");
console.log("Raidė B pasikartojo " + countB + " kartų.");
console.log("Raidė C pasikartojo " + countC + " kartų.");
console.log("Raidė D pasikartojo " + countD + " kartų.");
