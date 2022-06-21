//Laço For/ Loop For


// For
// while
// do..while
// For.. in 
// For..of


//1.For

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0)
        console.log(i);
}

//2.While loop

let i = 5
while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);

    }
    i--;

}

// do... While

console.log('DO...WHile');
let l = 0;
do {
    console.log("Digitando", l);
    l++;

} while (l < 10)