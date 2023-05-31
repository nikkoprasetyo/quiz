/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
  if (typeof price !== "number") {
    return "Price harus dalam angka";
  } else if (typeof tax !== "number") {
    return "Price & Pajak harus dalam angka";
  } else {
    let totalSales = `Rp.${price}`;
    let pajak = tax * 0.1;
    let totalHargaPajak = `Rp.${price + tax}`;
    return `Total Sales : ${totalSales}\nPajak : ${pajak}\nTotal Sales : ${totalHargaPajak}`;
    return totalHargaPajak;
  }
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
