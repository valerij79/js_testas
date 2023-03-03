console.log('4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.');

for (let i = 1; i <= 5; i++) {
    let skaicius = Math.floor(Math.random() * 10) + 1;
    console.log(skaicius);
}
  