function groupAnimals(animals) {
    // you can only write your code here!
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var zoo = [] //disini gw mau kumpulin nanti hasil akhirnya
    for(var i = 0; i < alphabet.length; i++) { //gw mau cek looping satu satu baru nanti gw cek dah apakah sama dengan index 0 suatu string
        // console.log(alphabet[i])
        var firstWord = [] //var tampung
        for(var j = 0; j < animals.length; j++) { //looping huruf pertama setiap index
            if(alphabet[i] === animals[j][0]) { //kondisi jika alphabet a/b/c sama dengan huruf pertama index dari array sama
                firstWord.push(animals[j]) //maka push ke var tampung
            }
        }
        if(firstWord.length !== 0) {
            zoo.push(firstWord)
        }
    }
    // console.log(zoo)
    return zoo
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]