// 1. JSON
const student = {
    name: 'Sajib khan',
    age: 34,
    movies: ['King khan', 'Dhaka attack']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys, values);   

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove an array
const products = [
    {name: 'laptop', price: 32000, brand: 'asus', color: 'silver'},
    {name: 'phone', price: 8000, brand: 'tecno', color: 'blackpurple'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'silver'},
    {name: 'sunglass', price: 320, brand: 'ray', color: 'black'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without one specific item
// remove phone mens create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);