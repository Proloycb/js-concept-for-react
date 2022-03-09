const numbers = [98, 87, 12, 34];

const student = {
    name: 'Sajib khan',
    age: 34,
    movies: ['King khan', 'Dhaka attack']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
// console.log(about);

// 2. spread operator
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);


// create a new array from an older array and add an element
const currentNumbers = [... numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

// 3. arrow function
const getNine = () => console.log(9);
const multiply = num => num * 12;
const output = multiply(12);
// console.log(output)
const isEven = x => x % 2 == 0;
// console.log(isEven(18))
const addDivide = (num1, num2) => (num1 + num2)/4;
// console.log(addDivide(10,14));

const addMultiply = (num1, num2) => {
    const addNum1 = num1 + 5;
    const addNum2 = num2 + 5;
    const result = addNum1 * addNum2;
    return result;
}
// console.log(addMultiply(10, 15));