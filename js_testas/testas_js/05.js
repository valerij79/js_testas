console.log('5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.');

let skaicius = 0;

while (skaicius !== 5) {
    skaicius = Math.floor(Math.random() * 10) + 1;
    console.log(skaicius);
}