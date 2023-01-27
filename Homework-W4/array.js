// Buatlah 100 nilai random (1-50) pada 1 array
let arr = [
  20, 39, 38, 7, 36, 35, 4, 33, 32, 31, 11, 2, 13, 14, 15, 16, 10, 18, 19, 40,
  41, 42, 44, 43, 45, 46, 48, 47, 49, 30, 50, 29, 28, 27, 26, 25, 24, 23, 22,
  21, 10, 9, 8, 37, 6, 5, 34, 3, 12, 31, 11, 12, 13, 14, 2, 16, 17, 18, 19, 20,
  21, 39, 38, 37, 36, 35, 34, 47, 32, 1, 28, 29, 30, 27, 26, 25, 24, 23, 22, 40,
  41, 42, 43, 45, 44, 46, 33, 48, 49, 50, 6, 1, 3, 4, 5, 15, 7, 8, 9, 17,
];
console.log(arr);

//Pecahlah menjadi 2 ARRAY berdasarkan indexnya, yakni array pada INDEX GENAP dan
//array pada INDEX GANJIL, gunakan method push () untuk menambahkan nilai baru pada array
let arrGenap = [];
let arrGanjil = [];
function arr_sort(a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (i % a == b) {
      arrGenap.push(arr[i]);
    } else {
      arrGanjil.push(arr[i]);
    }
  }
}
arr_sort(2, 0);
console.log(arrGenap);
console.log(arrGanjil);

//cari nilai min genap dan ganjil
let minArrGenap = [];
let minArrGanjil = [];
function sort_arr_minimal(a, b) {
  range1min = a;
  range2min = b;
  for (let i = 0; i < arrGenap.length; i++) {
    if (arrGenap[i] >= a && arrGenap[i] <= b) {
      minArrGenap.push(arrGenap[i]);
      minArrGenap.sort();
    }
  }
  for (let i = 0; i < arrGanjil.length; i++) {
    if (arrGanjil[i] >= a && arrGanjil[i] <= b) {
      minArrGanjil.push(arrGanjil[i]);
      minArrGanjil.sort();
    }
  }
}
sort_arr_minimal(0, 5);
let nilaiMinGenap = minArrGenap[0];
let nilaiMinGanjil = minArrGanjil[0];
console.log(nilaiMinGenap);
console.log(nilaiMinGanjil);

//cari nilai Max genap dan ganjil
let maxArrGenap = [];
let maxArrGanjil = [];
function sort_arr_Maksimal(a, b) {
  range1max = a;
  range2max = b;
  for (let i = 0; i < arrGenap.length; i++) {
    if (arrGenap[i] >= a && arrGenap[i] <= b) {
      maxArrGenap.push(arrGenap[i]);
      maxArrGenap.sort((a, b) => b - a);
    }
  }
  for (let i = 0; i < arrGanjil.length; i++) {
    if (arrGanjil[i] >= a && arrGanjil[i] <= b) {
      maxArrGanjil.push(arrGanjil[i]);
      maxArrGanjil.sort((a, b) => b - a);
    }
  }
}
sort_arr_Maksimal(45, 50);
let nilaiMaxGenap = maxArrGenap[0];
let nilaiMaxGanjil = maxArrGanjil[0];
console.log(nilaiMaxGenap);
console.log(nilaiMaxGanjil);

//cari total Genap dan Ganjil
let totalArrGenap = 0;
let totalArrGanjil = 0;
for (let i = 0; i < arrGenap.length; i++) {
  totalArrGenap += arrGenap[i];
}
for (let i = 0; i < arrGanjil.length; i++) {
  totalArrGanjil += arrGanjil[i];
}
console.log(totalArrGenap);
console.log(totalArrGanjil);

//cari rata-rata Genap dan Ganjil
let rataRataGenap = totalArrGenap / arrGenap.length;
let rataRataGanjil = totalArrGanjil / arrGanjil.length;
console.log(rataRataGenap);
console.log(rataRataGanjil);

//perbandingan nilai min, max, total dan rata-rata
let compareMin = "";
let compareMax = "";
let compareTotal = "";
let compareRataRata = "";
function compare(a0, a1, b0, b1, c0, c1, d0, d1) {
  if (a0 > a1) compareMin = "min genap lebih besar";
  else if (a0 < a1) compareMin = "min ganjil lebih besar";
  else compareMin = "nilai min genap dan ganjil sama";

  if (b0 > b1) compareMax = "max genap lebih besar";
  else if (b0 < b1) compareMax = "max ganjil lebih besar";
  else compareMax = "nilai max genap dan ganjil sama";

  if (c0 > c1) compareTotal = "total genap lebih besar";
  else if (c0 < c1) compareTotal = "total ganjil lebih besar";
  else compareTotal = "nilai total genap dan ganjil sama";

  if (d0 > d1) compareRataRata = "rata-rata genap lebih besar";
  else if (d0 < d1) compareRataRata = "rata-rata ganjil lebih besar";
  else compareRataRata = "nilai rata-rata genap dan ganjil sama";
}
compare(
  nilaiMinGenap,
  nilaiMinGanjil,
  nilaiMaxGenap,
  nilaiMaxGanjil,
  totalArrGenap,
  totalArrGanjil,
  rataRataGenap,
  rataRataGanjil
);
console.log(compareMin);
console.log(compareMax);
console.log(compareTotal);
console.log(compareRataRata);
