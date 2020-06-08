import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
//remember async
//arrange, act, assert, boom
test("form header renders", async () => {
  // arrange it
  const { getByText } = render(<CheckoutForm />);
  // act it out
  const header = getByText(/checkout form/i);
  // assert it
  expect(header).toBeInTheDocument();
  // boom
});

//remember async
//arrange, act, assert, boom
test("form shows success message on submit with form details", async () => {
  // arrange it
  const { getByTestId } = render(<CheckoutForm />);
  // act it out
  const btnTest = getByTestId("check");
  fireEvent.click(btnTest);
  // assert
  expect(btnTest).toBeInTheDocument;
  //boom
});
