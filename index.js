const cars = ["Porsche", "Audi", "BMW", "Volkswagen"];

const carsWithPrice = [
    {brand: "Porshe", price: 100000},
    {brand: "Audi", price: 80000},
    {brand: "Toyota", price: 30000}
];

const expensiveCars = carsWithPrice.filter(car => car.price >= 40000);
const cheapCars = carsWithPrice.filter(car => car.price < 40000);

console.log(expensiveCars)
console.log(cheapCars)