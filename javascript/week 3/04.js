function dataHandling2(input) {
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro') //menambah string ke dalam array
    input[1] = input[1] + ' Elsyahrawi' //menambah kata ke dalam string dalam array
    input[2] = 'Provinsi ' + input[2] //menambah kata ke dalam string dalam array
    return input
  }

  
var arr = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']
  
console.log(dataHandling2(arr))

var input = dataHandling2(arr)
var tanggal = input.slice(3, 4)//mengambil string dalam array
var bulan = tanggal[0].split('/') // memecah string dalam array agar menjadi beberapa index
    switch(bulan[1]) {
        case '01': bulan[1] = 'Januari'; break;
        case '02': bulan[1] = 'Februari'; break;
        case '03': bulan[1] = 'Maret'; break;
        case '04': bulan[1] = 'April'; break;
        case '05': bulan[1] = 'Mei'; break;
        case '06': bulan[1] = 'Juni'; break;
        case '07': bulan[1] = 'Juli'; break;
        case '08': bulan[1] = 'Agustus'; break;
        case '09': bulan[1] = 'September'; break;
        case '10': bulan[1] = 'Oktober'; break;
        case '11': bulan[1] = 'November'; break;
        case '12': bulan[1] = 'Desember'; break;
        default: bulan[1] = 'Masukan bulan yang benar'; break;
    }
console.log(bulan[1]) //memanggil index pertama string dalam array

var tahun = tanggal[0].split('/')
tahun.sort(function(a, b){
    return b-a
});
console.log(tahun)

var akhir = arr[3].split('/')
var akhirnya = akhir.join('-')
console.log(akhirnya)

var nama = arr[1].slice(0,14)
console.log(nama)


  
 /**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */