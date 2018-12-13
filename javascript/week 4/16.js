function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strNum = String(angka)
    var numFirst = strNum[0]
    var num = strNum.slice(1)
    var numLast = strNum[strNum.length-1]

    // console.log(strNum.length)
    if(strNum.length === 1) {
        return Number(numLast)
    }

    return Number(numFirst) + totalDigitRekursif(Number(num))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5