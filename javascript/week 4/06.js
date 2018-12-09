function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var tampung = [];

  for( let i = 1; i <= angka; i++ ) {
    // console.log(i)
    for( let j = i; j <= angka; j++ ) {
      // console.log(j)
      // console.log(i*j)
      if(i*j === angka) {
        // console.log('masuk pak eko', i,j)
        // var num = String(angka[i]) + String(angka[j])
        // console.log(String(angka[i]))
        // console.log(toString(i,j))
        var num = i + '' + j
        tampung.push(num)
      }
    }
  }
  var jumlah = 0
  for( let k = 0; k < tampung.length; k++ ) {
    if(tampung[k].length <= tampung[0].length) {
      // jumlah++
      jumlah = tampung[k].length
    }
  }
  return jumlah
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2