var nama = 'Zoro';
var peran = 'Ksatria';

if (nama === '') {
    console.log('Nama tidak boleh kosong')
}
else if (nama !== '' && peran === '') {
    console.log('Halo ' + nama + '. Pilih peranmu untuk memulai game')
}
else if (nama !== '' && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + 
    '\n halo Ksatria ' + nama + ' kamu dapat menyerang dengan senjatamu!')
}
else if (nama !== '' && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + 
    '\n halo Tabib ' + nama + ' kamu akan membantu temanmu yang terluka.')
}else if (nama !== '' && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + 
    '\n halo Penyihir ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu!')
}