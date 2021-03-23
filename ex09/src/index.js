const product = (...args) => {
  return args.reduce((a, b) => a * b, 1);
};

console.log(product(1,2));
module.exports = product;
