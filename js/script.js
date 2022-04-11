const multiplesOfTree = 'Fizz';
const multiplesOfFive = 'Buzz';
const multiplesOfBoth = multiplesOfTree + multiplesOfFive;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log(multiplesOfTree);
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log(multiplesOfFive);
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log(multiplesOfBoth);
    } else {
        console.log(i);
    }

}