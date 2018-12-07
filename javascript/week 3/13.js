function targetTerdekat(arr) {
    // you can only write your code here!
    var temp = []
    var o = 0;
    var x = []
    var interval = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
           o = i;
        }
        else if(arr[i] === 'x') {
            x.push(i);
        }
        else if(arr.indexOf('x') === -1) {
            return 0
        }
    }
    for(var j = 0; j < x.length; j++) {
        interval.push(x[j]-o)
    }
    for(var k = 0; k < interval.length; k++) {
        var temp = Math.abs(interval[0])
        var abs = Math.abs(interval[k])
        if(temp > abs) {
            temp = abs
        }
    }
    return temp
}
  
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2