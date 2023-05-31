const himpunanBilanganAsli = [83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8];
let length = himpunanBilanganAsli.length;
let ganjil = 0;
let genap = 0;

for (let i = 0; i < length; i++) {
    if (himpunanBilanganAsli[i] % 2 === 0) {
        genap++;
    } else {
        ganjil++;
    }
}

console.log(`Jumlah bilangan genap = ${genap}`);
console.log(`Jumlah bilangan ganjil = ${ganjil}`);
