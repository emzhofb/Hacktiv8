//part I

var rows1 = 5;

for (let index = 0; index < rows1; index++) {
    console.log('*');
}

//part II

var rows2 = 5;

for (var baris = 0; baris < rows2; baris++) {
    var jumlah = '';
    for (var kolom = 0; kolom < rows2; kolom++) {
        jumlah += '*';
    }
    console.log(jumlah);
}

//part III

var rows3 = 5;

for (var tangga = 0; tangga < rows3; tangga++) {
    var jumlah = '';
    for (var naik = 0; naik <= tangga; naik++) {
        jumlah += '*';
    }
    console.log(jumlah);
}