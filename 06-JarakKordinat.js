/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1, y1, x2, y2) {
  //   if (
  //     x1 !== "number" ||
  //     y1 !== "number" ||
  //     x2 !== "number" ||
  //     y2 !== "number"
  //   ) {
  //     console.log("nukan ");
  //   }
  if (
    isNaN(x1) == true ||
    isNaN(y1) == true ||
    isNaN(x2) == true ||
    isNaN(y2) == true
  ) {
    return `input kordinat dalam angka`;
  } else {
    // let output = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let x = Math.pow(x1 - x2, 2);
    let y = Math.pow(y1 - y2, 2);
    let output = Math.sqrt(x + y);
    return output;
  }
}

console.log(getCordinat(3, 4, -4, -5)); //9
console.log(getCordinat("1", "2", "-1", "-2")); //1
console.log(getCordinat("x", "2", "-y", "-2")); //input kordinat dalam angka
console.log(getCordinat(3.2, 4.5, -4.4, -5)); //13.695801445917125
