/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
  if (isNaN(n)) {
    return `${n} is not number, try again...`;
  } else if (n > 10000) {
    return `${n} harus lebih kecil dari 10000`;
  } else {
    let string = n.toString();
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      sum += Number(string[i]);
    }
    return sum;
  }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
