function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var alpha = alphabet.toUpperCase()
    var kata = ''

    for( var i = 0; i < kalimat.length; i++ ) {
        var flag = false;
        for( var j = 0; j < alphabet.length; j++ ) {
            if( kalimat[i] === alphabet[j] ) {
                kata += kalimat[i].toUpperCase()
                flag = true
            }
            else if( kalimat[i] === alpha[j] ) {
                kata += kalimat[i].toLowerCase()
                flag = true
            }
        }
        if( flag === false ) {
            kata += kalimat[i]
        }
    }
    return kata
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"