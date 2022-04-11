const multiplesOfTree = 'Fizz';
const multiplesOfFive = 'Buzz';
const multiplesOfBoth = multiplesOfTree + multiplesOfFive;

const containerWrapper = document.getElementById('general-container');

for (let i = 1; i <= 100; i++) {
    let screen;
    let colorClass;
    const divElement = document.createElement('div');

    if (i % 3 == 0 && i % 5 != 0) {
        screen = multiplesOfTree;
        colorClass = 'bg-multiples-of-tree';
    } else if (i % 5 == 0 && i % 3 != 0) {
        screen = multiplesOfFive;
        colorClass = 'bg-multiples-of-five';
    } else if (i % 3 == 0 && i % 5 == 0) {
        screen = multiplesOfBoth;
        colorClass = 'bg-multiples-of-both';
    } else {
        screen = i;
        colorClass = 'bg-numbers';
    }

    console.log(screen);
    
    divElement.classList.add('square', colorClass);
    divElement.innerHTML = screen;

    containerWrapper.append(divElement);
}