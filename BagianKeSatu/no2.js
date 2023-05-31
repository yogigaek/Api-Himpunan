const himpunanBilanganAsli = [83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8];
let small = himpunanBilanganAsli[0];

for (let i = 1; i < himpunanBilanganAsli.length; i++) {
    if (himpunanBilanganAsli[i] < small) {
      small = himpunanBilanganAsli[i];
    }
};

console.log(`anggota terkecil dari Variable Himpunan Bilangan Asli = ${small}`);