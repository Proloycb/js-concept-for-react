// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// const[x, y] = [42, 65];

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const student = {
    name: 'Sajib khan',
    age: 34,
    movies: ['King khan', 'Dhaka attack']
}

const [firstMovie, secondMovie] = student.movies;

// object destructuring
const {name1, age1} = {name1: 'alu', age1: 14};
const {name2, age2} = {id: 12, name2: 'alu', age2: 14};

// console.log(name2, age2);

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 65,
        weight: 67,
        address: 'kumarkhali',
        watch: {
            color: 'black',
            price: 600,
            brand: 'gramin'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch;