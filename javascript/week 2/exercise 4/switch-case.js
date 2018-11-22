var tanggal = 23;
var bulan = 15;
var tahun = 1999;

switch (bulan) {
    case 1:
        bulan = 'Januari'
    break;
    case 2:
        bulan = 'Februari'
    break;
    case 3:
        bulan = 'Maret'
    break;
    case 4:
        bulan = 'April'
    break;
    case 5:
        bulan = 'Mei'
    break;
    case 6:
        bulan = 'Juni'
    break;
    case 7:
        bulan = 'Juli'
    break;
    case 8:
        bulan = 'Agustus'
    break;
    case 9:
        bulan = 'September'
    break;
    case 10:
        bulan = 'Oktober'
    break;
    case 11:
        bulan = 'November'
    break;
    case 12:
        bulan = 'Desember'
    break;
    default:
        bulan = 'inputlah bulan yang benar'
        break;
}

// if cek tanggal
if (tanggal <= 0 || tanggal > 31){
    console.log('inputlah tanggal yang benar')
}
// else if untuk tahun
else if (tahun < 1900 || tahun > 2200){
    console.log('inputlah tahun di antara 1900 sampai 2200')
}

// else 
else{
    console.log(tanggal + ' ' + bulan + ' ' + tahun)
}
