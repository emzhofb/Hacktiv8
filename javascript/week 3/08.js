function pasanganTerbesar(num) {
    // you can only write your code here!
    var angka = String(num) //merubah number ke string
    var pasanganAngkaTerbesar = Number(angka[0] + angka[1]) //merubah string ke number

    for(var i = 0; i < angka.length-1; i++) { //looping string angka
        var pasanganAngka = Number(angka[i] + angka[i+1]) //var tampung juga dijadikan number karena ini string
        if(pasanganAngka > pasanganAngkaTerbesar) {
            pasanganAngkaTerbesar = pasanganAngka
        }
    }
    return pasanganAngkaTerbesar
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99