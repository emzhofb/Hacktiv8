function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = []

    if (arrPenumpang.length === 0) {
        return ''
    }

    for ( let i = 0; i < arrPenumpang.length; i++ ) {
        // console.log(arrPenumpang[i])
        var start = 0
        var cityFrom = ''
        var finish = 0
        var cityTo = ''
        for ( let j = 0; j < arrPenumpang[i].length; j++ ) {
            // console.log(arrPenumpang[i][j])
            for ( let k = 0; k < rute.length; k++ ) {
                // console.log(rute[k])
                if ( arrPenumpang[i][1] === rute[k] ) {
                    start = k
                    cityFrom = rute[k]
                }
                if ( arrPenumpang[i][2] === rute[k] ) {
                    finish = k
                    cityTo = rute[k]
                }
            }
        }
        // console.log(start, finish)
        var interval = (finish - start) * 2000
        // console.log(interval)
        var temp = {}
        temp.penumpang = arrPenumpang[i][0]
        temp.naikDari = cityFrom
        temp.tujuan = cityTo
        temp.bayar = interval
        // console.log(temp)
        result.push(temp)
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]