let numOne = document.getElementById('num1');
let numTwo = document.getElementById('num2');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
let answer = document.getElementById('ans');

add.addEventListener('click', () => {
    answer.value = parseFloat(numOne.value) + parseFloat(numTwo.value);
    if (answer.value == "NaN") answer.value = "Enter some numbers";
});
subtract.addEventListener('click', () => {
    answer.value = parseFloat(numOne.value) - parseFloat(numTwo.value);
    if (answer.value == "NaN") answer.value = "Enter some numbers";
});
multiply.addEventListener('click', () => {
    answer.value = parseFloat(numOne.value) * parseFloat(numTwo.value);
    if (answer.value == "NaN") answer.value = "Enter some numbers";
});
divide.addEventListener('click', () => {
    answer.value = parseFloat(numOne.value) / parseFloat(numTwo.value);
    if (answer.value == "NaN") answer.value = "Enter some numbers";
});

clear.addEventListener('click', () => {
    numOne.value = '';
    numTwo.value = '';
    answer.value = '';
})