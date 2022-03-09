const products = [
    {name: 'laptop', price: 32000, brand: 'asus', color: 'silver'},
    {name: 'phone', price: 8000, brand: 'tecno', color: 'blackpurple'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'silver'},
    {name: 'sunglass', price: 320, brand: 'ray', color: 'black'},
];

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));
products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
const specialName = products.filter(product => product.name.includes('n'));
// console.log(specialName);
// 4. find
const special = products.find(product => product.name.includes('n'));
console.log(special);
