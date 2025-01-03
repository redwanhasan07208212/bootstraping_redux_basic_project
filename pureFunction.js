//pure function
const add = (a, b) => {
  return a + b;
};

console.log(add(4, 5));
console.log(add(6, 5));
console.log(add(7, 5));

// Impure Function
let total = 0;
const addToTotal = (amount) => {
  return (total = total + amount);
};
const updateDate = () => {
  new Date();
};

const randomNumber = (amount) => {
  return amount + Math.random();
};

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
