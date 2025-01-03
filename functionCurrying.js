// currying function

// const add = (a) => (b) => a + b;

function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(5)(90));

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3);
console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(300));
