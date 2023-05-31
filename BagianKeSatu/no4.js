const himpunanBilanganAsli = [83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8];
let length = himpunanBilanganAsli.length;
let duplicateNumbers = [];

for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
        if (himpunanBilanganAsli[i] === himpunanBilanganAsli[j]) {
            if (!duplicateNumbers.includes(himpunanBilanganAsli[i])) {
                duplicateNumbers.push(himpunanBilanganAsli[i]);
            }
        }
    }
}

console.log(`anggota dari Variable Himpunan Bilangan Asli
dengan nilai angka sama dan lebih dari satu = ${duplicateNumbers}`);