const multiplesOfTree = 'Fizz';
const multiplesOfFive = 'Buzz';
const multiplesOfBoth = multiplesOfTree + multiplesOfFive;

const containerWrapper = document.getElementById('general-container');

for (let i = 1; i <= 100; i++) {
    let screen;
    if (i % 3 == 0 && i % 5 != 0) {
        screen = multiplesOfTree;
    } else if (i % 5 == 0 && i % 3 != 0) {
        screen = multiplesOfFive;
    } else if (i % 3 == 0 && i % 5 == 0) {
        screen = multiplesOfBoth;
    } else {
        screen = i;
    }

    console.log(screen);
    
    const divElement = document.createElement('div');
    divElement.classList.add('square');
    divElement.innerHTML = screen;

    containerWrapper.append(divElement);
}