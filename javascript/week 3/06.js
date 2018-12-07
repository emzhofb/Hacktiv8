function angkaPalindrome(num) {
    // you can only write your code here!
    // flag => kapan dia harus berhenti 
    //console.log(typeof( i = num))
    var isPalindrome = false // selama isPalindromenya belum ketemu, dia akan terus mencari 
    // logic nya adalah dia akan terus mencari angka palindrome di sebelahnya 
    while( isPalindrome === false ) {
        // console.log("num => ",num)
        num++
       //  dijadiin string 
       var stringNumber = String(num)
       // dibalik 
       var temp = ''
       for(var i = stringNumber.length-1; i >= 0; i--) {
           //console.log(stringNumber[i])
           temp += stringNumber[i]
       }
       //console.log(temp)
       // string di jadikan number
       var newNumber = Number(temp)
        //cek apakah angka tersebut adalah palindrome
        //console.log(" => ",newNumber)
       if(newNumber === num) {
        isPalindrome = true // adalah saat dia berhenti
       }
     
    }
    return newNumber
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001