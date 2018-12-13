function sorting(arrNumber) {
    // code di sini
    // console.log(arrNumber);
    for( let i = 0; i < arrNumber.length; i++ ) {
        var minimum = arrNumber[i]
        var assign = i
        for( let j = i+1; j < arrNumber.length; j++ ) {
            if( minimum > arrNumber[j] ) {
                minimum = arrNumber[j]
                assign = j
            }
        }
        // console.log(minimum)
        var temp = arrNumber[i]
        // console.log(temp)
        arrNumber[i] = minimum
        // console.log(arrNumber[i])
        arrNumber[assign] = temp
        // console.log(arrNumber[assign])
    }
    // console.log(arrNumber)
    return arrNumber
}

function getTotal(arrNumber) {
    if(arrNumber.length === 0) {
        return ''
    }
    // code di sini
    var maxNum = arrNumber[arrNumber.length-1]
    var countMaxNum = 0
    // console.log(maxNum)
    
    for( let k = 0; k < arrNumber.length; k++ ) {
        // console.log(maxNum === arrNumber[k]);
        if( maxNum === arrNumber[k] ) {
            countMaxNum++
        }
        // console.log(countMaxNum);
    }
    return 'angka paling besar adalah ' + maxNum + ' dan jumlah kemunculan sebanyak ' + countMaxNum + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''