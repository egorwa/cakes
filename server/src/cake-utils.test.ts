// This file contains unit tests for the cake utility functions and classes.
import { Cake, totalPrice, findCakeById } from "./cake-utils.js";

// TESTS: unit tests for utility functions
test("totalPrice uses recursion", () => {
  const cakes = [new Cake(1, "A", 100, "x"), new Cake(2, "B", 50, "x")];
  expect(totalPrice(cakes)).toBe(150);
});

test("findCakeById throws exception", () => {
  expect(() => findCakeById([], 99)).toThrow("not found");
});