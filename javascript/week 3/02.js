// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
// Example

//input "hello world!"
//output
// "!dlrow olleh"

function balikString (input) {
  var word = '';
  for(var i = input[0].length-1; i >= 0; i--) {
    word += input[0][i];
  }
  return word;
}

var str = ['Hello world!'];
console.log(balikString (str))