// Buatlah 100 nilai random (1-50) pada 1 array
let arr = [];
for (let i = 1; i <= 100; i++) {
  function getRandom() {
    return Math.ceil(Math.random() * 50);
  }
  arr.push(getRandom(i));
}
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
