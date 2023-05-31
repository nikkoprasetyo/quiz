/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
  //   return isNaN(seconds);
  if (isNaN(seconds)) {
    return `${seconds} is not number`;
  } else {
    let days = Math.floor(seconds / 86400);
    let secondsForHours = seconds % 86400;

    let hours = Math.floor(secondsForHours / 3600);
    let secondsForMinutes = Math.floor(secondsForHours % 3600);

    let minutes = Math.floor(secondsForMinutes / 60);
    let secondsForSeconds = Math.floor(secondsForMinutes % 60);

    return `${days} hari ${hours} jam ${minutes} menit ${secondsForSeconds} detik`;
  }
}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
