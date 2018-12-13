function changeVocals (str) {
  //code di sini
  var vocalBefore = 'aiueoAIUEO'
  var vocalAfter = 'bjvfpBJVFP'
  var temp = ''

  for(let i = 0; i < str.length; i++) {
    var flag = false
    for(let j = 0; j < vocalBefore.length; j++) {
      if(str[i] === vocalBefore[j]) {
        temp += vocalAfter[j]
        flag = true
      }
    }
    if(flag === false) {
      temp += str[i]
    }
  }
  // console.log(temp)
  return temp
}

function reverseWord (str) {
  //code di sini
  var temp = ''
  for( let i = str.length-1; i >= 0; i-- ) {
    temp += str[i]
  }
  // console.log(temp)
  return temp
}

function setLowerUpperCase (str) {
  //code di sini
  var temp = ''
  for( let i = 0; i < str.length; i++ ) {
    if( str[i] === str[i].toLowerCase() ) {
      temp += str[i].toUpperCase()
    }
    else if( str[i] === str[i].toUpperCase() ) {
      temp += str[i].toLowerCase()
    }
  }
  // console.log(temp)
  return temp
}

function removeSpaces (str) {
  //code di sini
  var temp = ''
  for( let i = 0; i < str.length; i++ ) {
    if(str[i] === ' ') {
      temp += ''
    }
    else {
      temp += str[i]
    }
  }
  // console.log(temp)
  return temp
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  var changeWord = changeVocals(name)
  var reverseSomething = reverseWord(changeWord)
  var changeSize = setLowerUpperCase(reverseSomething)
  var result = removeSpaces(changeSize)
  return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'