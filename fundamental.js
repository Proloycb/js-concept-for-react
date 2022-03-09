// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: <,>, ===, !==, <=, >=
// multiple conditions: && , ||

if(fatherName === 'arnold' || season === 'rainy'){
    console.log('This is true for or conditions');
}
else if(fatherName === 'Arnold' && season === 'winter'){
    // console.log('This is true for and conditions');
}
else{
    console.log('Those are not true');
}

// 3. Array declare
// index, length, push

const numbers = [98, 87, 12, 34];
numbers[0] = 57;
numbers.push(98);
numbers.pop();

// console.log(numbers.includes(12));

// 4. loop
// while loop
let i = 0;
while(i< numbers.length){
    const number = numbers[i];
    i++;
    // console.log(number);
}

// for loop

for(let i = 0; i< numbers.length; i++){
    const number = numbers[i];
    // console.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(50, 55);
// console.log(output);

// 6. object
// 3 ways to access property by name
const student = {
    name: 'Sajib khan',
    age: 34,
    movies: ['King khan', 'Dhaka attack']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable