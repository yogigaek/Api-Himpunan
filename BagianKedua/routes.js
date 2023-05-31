const router = require('express').Router()

router.post('/jumlahInputan', (req, res) => {
    let himpunanBilanganAsli = req.body.himpunan;
    let jumlahInputan = himpunanBilanganAsli.length;

    res.json({
        "Jumlah Inputan adalah ": jumlahInputan
    });
});

router.post('/anggotaTerkecil', (req, res) => {
    let himpunanBilanganAsli = req.body.himpunan;
    let small = himpunanBilanganAsli[0];

    for (let i = 1; i < himpunanBilanganAsli.length; i++) {
        if (himpunanBilanganAsli[i] < small) {
            small = himpunanBilanganAsli[i];
        };
    };

    res.json({
        "Anggota terkecil dari Inputan adalah": small
    });
});

router.post('/anggotaTerbesar', (req, res) => {
    let himpunanBilanganAsli = req.body.himpunan;
    let biggest = himpunanBilanganAsli[0];

    for (let i = 1; i < himpunanBilanganAsli.length; i++) {
        if (himpunanBilanganAsli[i] > biggest) {
          biggest = himpunanBilanganAsli[i];
        } 
    };

    res.json({
        "Anggota terbesar dari Inputan adalah": biggest
    });
});

router.post('/samaLebihDariSatu', (req, res) => {
    let himpunanBilanganAsli = req.body.himpunan;
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
    };

    res.json({
        "Anggota dari Variable Himpunan Bilangan Asli dengan nilai angka sama dan lebih dari satu adalah": duplicateNumbers
    });
});

router.post('/samaLebihDariSatuUrutanKe', (req, res) => {
    let himpunanBilanganAsli = req.body.himpunan;
    let duplicateNumbers = [];
    let sortedHimpunan = [];
    let positions = {};

    for (let i = 0; i < himpunanBilanganAsli.length; i++) {
        for (let j = i + 1; j < himpunanBilanganAsli.length; j++) {
            if (himpunanBilanganAsli[i] === himpunanBilanganAsli[j]) {
                if (!duplicateNumbers.includes(himpunanBilanganAsli[i])) {
                    duplicateNumbers.push(himpunanBilanganAsli[i]);
                }
            }
        }
    }

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
    for (let i = 0; i < duplicateNumbers.length; i++) {
        for (let j = 0; j < sortedHimpunan.length; j++) {
            if (duplicateNumbers[i] === sortedHimpunan[j]) {
                positions[duplicateNumbers[i]] = j + 1;
                break;
            }
        }
    }

    res.json(positions);
});

router.post('/jumlahGanjilGenap', (req, res) => {
    let himpunanBilanganAsli = req.body.himpunan;
    let length = himpunanBilanganAsli.length;
    let ganjil = 0;
    let genap = 0;

    for (let i = 0; i < length; i++) {
        if (himpunanBilanganAsli[i] % 2 === 0) {
            genap++;
        } else {
            ganjil++;
        }
    };

    res.json({
        "Jumlah bilangan genap" : genap,
        "Jumlah bilangan ganjil" : ganjil,
    });
});

router.post('/tampilGenapGanjil', (req, res) => {
    let himpunanBilanganAsli = req.body.himpunan;
    let length = himpunanBilanganAsli.length;
    let genap = [];
    let ganjil = [];

    for (let i = 0; i < length; i++) {
        if (himpunanBilanganAsli[i] % 2 === 0) {
            genap.push(himpunanBilanganAsli[i]);
        } else {
            ganjil.push(himpunanBilanganAsli[i]);
        }
    };

    res.json({
        "Bilangan genap" : genap,
        "Bilangan ganjil" : ganjil,
    });
});

module.exports = router
