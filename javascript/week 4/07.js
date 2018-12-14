function urutkanAbjad(str) {
    // you can only write your code here!
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    var temp = ''
    for ( let i = 0; i < alphabet.length; i++ ) {
        for ( let j = 0; j < str.length; j++ ) {
            if ( str[j] === alphabet[i] ) {
                temp += alphabet[i]
            }
        }
    }
    return temp
    // return str.toString().split('').sort().join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'