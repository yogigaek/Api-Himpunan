const himpunanBilanganAsli = [83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8];
let duplicateNumbers = [];
let sortedHimpunan = [];

// Mendapatkan bilangan duplikat
for (let i = 0; i < himpunanBilanganAsli.length; i++) {
    for (let j = i + 1; j < himpunanBilanganAsli.length; j++) {
        if (himpunanBilanganAsli[i] === himpunanBilanganAsli[j]) {
            if (!duplicateNumbers.includes(himpunanBilanganAsli[i])) {
                duplicateNumbers.push(himpunanBilanganAsli[i]);
            }
        }
    }
}

// Pengurutan bilangan asli (bubble sort)
for (let i = 0; i < himpunanBilanganAsli.length; i++) {
    sortedHimpunan[i] = himpunanBilanganAsli[i];
}

for (let i = 0; i < sortedHimpunan.length; i++) {
    for (let j = 0; j < sortedHimpunan.length - 1; j++) {
        if (sortedHimpunan[j] > sortedHimpunan[j + 1]) {
            let temp = sortedHimpunan[j];
            sortedHimpunan[j] = sortedHimpunan[j + 1];
            sortedHimpunan[j + 1] = temp;
        }
    }
}

// Menentukan posisi bilangan duplikat dalam himpunan yang telah diurutkan
for (let i = 0; i < duplicateNumbers.length; i++) {
    for (let j = 0; j < sortedHimpunan.length; j++) {
        if (duplicateNumbers[i] === sortedHimpunan[j]) {
            console.log(`Angka ${duplicateNumbers[i]} berada pada urutan ke-${j + 1}`);
            break;
        }
    }
}
