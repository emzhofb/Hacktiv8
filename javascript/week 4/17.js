// function kaliTerusRekursif(angka) {
//     // you can only write your code here!
//     var strNum = String(angka)
//     var fisrtNum = strNum[0]
//     var num = strNum.slice(1)
//     var lastNum = strNum[strNum.length-1]

//     if( strNum.length === 1 ) {
//         return Number(lastNum)
//     }

//     return kaliTerusRekursif(Number(fisrtNum) * kaliTerusRekursif(Number(num)))
// }

// // TEST CASES
// console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strNum = String(angka)
    var fisrtNum = strNum[0]
    var num = strNum.slice(1)
    var lastNum = strNum[strNum.length-1]

    for( let i = 0; i < strNum.length; i++ ) {
        if(strNum.length > 1) {
            return Number(fisrtNum) * kaliTerusRekursif(Number(num))
        }
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6