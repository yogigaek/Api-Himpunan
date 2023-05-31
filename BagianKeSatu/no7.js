const himpunanBilanganAsli = [83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8];
let length = himpunanBilanganAsli.length;
let genap = [];
let ganjil = [];

for (let i = 0; i < length; i++) {
    if (himpunanBilanganAsli[i] % 2 === 0) {
        genap.push(himpunanBilanganAsli[i]);
    } else {
        ganjil.push(himpunanBilanganAsli[i]);
    }
}

console.log(`Bilangan genap = ${genap}`);
console.log(`Bilangan ganjil = ${ganjil}`);
