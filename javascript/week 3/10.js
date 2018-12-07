function perkalianUnik(arr) {
  // you can only write your code here!
  var result = []; //menampung jumlah perkalian yang nanti akan di bagi oleh arraynya sendiri
  var sum = 1; //sum adalah jumlah, kenapa ditulis 1, karena kalau 0 di kali berapapun hasilnya tetap 0
  var temp; //var penampung hasil dari perkalian yang dibagi array
  for(var i = 0; i < arr.length; i++) { //looping pertama adalah untuk mengkalikan array satu dan lainnya
    sum *= arr[i]
  }
  for(var j = 0; j < arr.length; j++) { //looping kedua adalah hasil perkalian yang dibagi oleh isi dari array
    temp = sum / arr[j]
    result.push(temp) //memasukkan angka ke dalam array
  }
  // console.log(result)
  return result
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]