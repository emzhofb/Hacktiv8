var counter = 2;
var limit = 20;
var expression = 2;

console.log('LOOPING PERTAMA');

while (counter <= limit) {
    console.log(counter + ' - I love coding');
    counter = counter + expression;
}

console.log('LOOPING KEDUA');

while (limit <= 20, counter >= 2) {
    console.log(counter + ' - I will become fullstack developer');
    counter = counter - expression;
}

console.log('-------------------------');

var counter2 = 0;
var limit2 = 20;

console.log('LOOPING PERTAMA');

for (let counter2 = 0; counter2 <= limit2; counter2++) {
    console.log(counter2 + ' - I love coding');
}

console.log('LOOPING KEDUA');

for (let counter2 = 20, limit2 = 0; counter2 >= limit2; counter2--) {
    console.log(counter2 + ' - I will become fullstack developer');
}

var index;

for (let index = 1; index <= 100; index++) {
    if (index % 2 === 0) {
        console.log(index + ' - Genap');
    }    else {
        console.log(index + ' - Ganjil');
    }
}

for (let index = 1; index <= 100; index += 2) {
    if (index % 3 === 0) {
        console.log(index + ' - Kelipatan 3');
    }    else {
        console.log(index);
    }
}

for (let index = 1; index <= 100; index += 5) {
    if (index % 6 === 0) {
        console.log(index + ' - Kelipatan 6');
    }    else {
        console.log(index);
    }
}

for (let index = 1; index <= 100; index += 9) {
    if (index % 10 === 0) {
        console.log(index + ' - Kelipatan 10');
    }    else {
        console.log(index);
    }
}