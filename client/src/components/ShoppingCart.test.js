import React from "react";
import {
  render,
  fireEvent,
  getByLabelText,
  getByTestId,
  screen,
} from "@testing-library/react";
import { LocalStorageMock } from "@react-mock/localstorage";
import { act } from "react-dom/test-utils";
import ShoppingCart from "./ShoppingCart";


// const plants = {{}, {}, {}} // with each object being a mock plant
const plants = {plantsData[0], }; // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />);

  fireEvent.click(getAllByText(/plant-button/i)[1]);
});

// Add a test file for the ShoppingCart component and test that it displays plants there (you'll need some mock plant data for the test, and then you can pass that data in as a prop when you call render and render the component - see the example below)
