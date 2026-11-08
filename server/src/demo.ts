import { Cake, totalPrice, findCakeById, getExpensiveCakes } from "./cake-utils.js";

async function runDemo() {
  const cakes: Cake[] = [
    new Cake(1, "Chocolate Cake", 900, "Chocolate"),
    new Cake(2, "Red Velvet", 800, "Velvet"),
    new Cake(3, "Carrot Cake", 580, "Carrot"),
  ];

  console.log("All expensive cakes:", getExpensiveCakes(cakes));
  console.log("Total price (recursion):", totalPrice(cakes));

  try {
    const cake = findCakeById(cakes, 45);
    console.log(cake);
  } catch (error) {
    console.error("Handled exception:", (error as Error).message);
  }
}

runDemo();