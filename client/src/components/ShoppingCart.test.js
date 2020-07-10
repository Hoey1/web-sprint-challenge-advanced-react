import React from "react";
import ShoppingCart from "./ShoppingCart";
import { render, fireEvent } from "@testing-library/react";
import PlantList from "./PlantList";

// fireEvent button to add plant to cart
// view cart and confirm plant is in the cart

const plants = {}; // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />);
});
