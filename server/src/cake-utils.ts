export class Cake {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: string
  ) {}

  getFormattedPrice(): string {
    return `R${this.price.toFixed(2)}`;
  }
}

// LISTS: filter + map
export function getExpensiveCakes(cakes: Cake[]): string[] {
  return cakes
    .filter((c) => c.price > 200)
    .map((c) => `${c.name} - ${c.getFormattedPrice()}`);
}

// RECURSION: calculates total price by calling itself
export function totalPrice(cakes: Cake[], index = 0): number {
  if (index >= cakes.length) return 0; // base case
  return cakes[index].price + totalPrice(cakes, index + 1); // recursive call
}

// EXCEPTIONS: throw + handle
export function findCakeById(cakes: Cake[], id: number): Cake {
  const found = cakes.find((c) => c.id === id);
  if (!found) {
    throw new Error(`Cake with id ${id} not found`);
  }
  return found;
}