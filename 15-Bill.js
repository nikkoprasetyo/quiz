/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
  let gajiPertama = taxGaji(gaji1);
  let gajiKedua = taxGaji(gaji2);
  let gajiKetiga = taxGaji(gaji3);
  let finalGajiPertama = gaji1 + gaji1 * gajiPertama;
  let finalGajiKedua = gaji2 + gaji2 * gajiKedua;
  let finalGajiKetiga = gaji3 + gaji3 * gajiKetiga;
  let total = finalGajiPertama + finalGajiKedua + finalGajiKetiga;
  return `Total gaji yang harus dibayar :\nEmp1 : Rp.${gaji1} + Pajak(${
    gajiPertama * 100
  }%)=Rp.${finalGajiPertama}\nEmp1 : Rp.${gaji2} + Pajak(${
    gajiKedua * 100
  }%)=Rp.${finalGajiKedua}\nEmp1 : Rp.${gaji3} + Pajak(${
    gajiKetiga * 100
  }%)=Rp.${finalGajiKetiga}\nTotal : Rp.${total}`;
}

function taxGaji(gaji) {
  if (gaji >= 10_000) {
    return (10 / 100).toFixed(2);
  } else if (gaji >= 1_000 && gaji < 10_000) {
    return (5 / 100).toFixed(2);
  } else if (gaji >= 100 && gaji < 1000) {
    return (2 / 100).toFixed(2);
  }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
