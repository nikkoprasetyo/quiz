/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(w1, wg2, wg3) {
  let heaviest = [w1, wg2, wg3].reverse()[0];
  return heaviest;
}

console.log(getHeavier(12, 45, 70)); //70
