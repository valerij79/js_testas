console.log('Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).');

 
function lygineSuma(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      // jei abu kintamieji yra skaičiai
      if ((a + b) % 2 === 0) {
        console.log(a + b);
      } else {
        console.log("Suma nelyginė");
      }
    } else if (Array.isArray(a) && Array.isArray(b)) {
      // jei abu kintamieji yra masyvai
      if ((a.length + b.length) % 2 === 0) {
        console.log(a.length + b.length);
      } else {
        console.log("Suma nelyginė");
      }
    } else {
      console.log("Klaida: abu parametrai turi būti arba skaičiai, arba masyvai.");
    }
  }
  