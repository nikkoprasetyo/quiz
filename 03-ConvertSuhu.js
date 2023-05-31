/**
 * konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 *
 */

function fareinheitToKelvin(fareinheit) {
  let checkNumber = isNaN(fareinheit);
  if (checkNumber) {
    return "Fareinheit must an number";
  } else {
    let output = Math.round((fareinheit + 459.67) / 1.8);
    return `Convert Fareinheit (${fareinheit}) to Kelvin = ${output}`;
  }
}

console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number
