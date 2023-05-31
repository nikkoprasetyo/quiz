/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
  if (isNaN(start) || isNaN(end)) {
    return `${start} or ${end} harus dalam angka`;
  } else if (start < end) {
    // Persentase Kenaikan Gaji = ((Gaji Sekarang - Gaji Sebelum) / Gaji Sebelum) x 100%
    let increase = ((end - start) / start) * 100;
    return `Total kenaikan income ${increase}%`;
  } else {
    let decrease = Math.ceil(((start - end) / start) * 100);
    return `Total penurunan income -${decrease}%`;
  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
