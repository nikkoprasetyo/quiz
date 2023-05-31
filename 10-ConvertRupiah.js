/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  if (!type) {
    return "no match type currency";
  } else {
    switch (type) {
      case "yen":
        return `${money} ${type} = Rp.${(money * 130.12).toLocaleString(
          "id-ID"
        )}`;

      case "usd":
        return `${money} ${type} = Rp.${(money * 14382.5).toLocaleString(
          "id-ID"
        )}`;

      case "euro":
        return `${money} ${type} = Rp.${(money * 1600000).toLocaleString(
          "id-ID"
        )}`;
    }
  }
}

console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
