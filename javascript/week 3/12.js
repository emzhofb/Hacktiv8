function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    //membuat flag penampung
    var temp = 0;
    //looping untuk check perkalian
    for(var i = 0; i < arr.length-1; i ++) { //looping untuk mengecek data satu satu
        temp = arr[1]/arr[0] //temp adalah index ke 1 di bagi index ke 0
        // console.log(temp)
        if(arr[i+1]/arr[i] !== temp) { //apakah index ke i+1 kalau di bagi index ke i tidak sama dengan temp ?
            return false
        }
    }
    return true
}
  
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false