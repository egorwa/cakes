import { Cake, totalPrice, findCakeById, getExpensiveCakes } from "./cake-utils.js";
// This file demonstrates the usage of utility functions and classes related to cakes.

async function runDemo() {
  const cakes: Cake[] = [
    new Cake(1, "Chocolate Cake", 900, "Chocolate"),
    new Cake(2, "Red Velvet", 800, "Velvet"),
    new Cake(3, "Carrot Cake", 580, "Carrot"),
  ];

  // Demonstrating the usage of utility functions
  console.log("All expensive cakes:", getExpensiveCakes(cakes));
  console.log("Total price (recursion):", totalPrice(cakes));

  // Demonstrating exception handling
  try {
    const cake = findCakeById(cakes, 45);
    console.log(cake);
  } catch (error) {
    console.error("Handled exception:", (error as Error).message);
  }
}

runDemo();