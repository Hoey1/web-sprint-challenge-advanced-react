import React from "react";
import {
  render,
  fireEvent,
  getByLabelText,
  getByTestId,
} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
  // Arrange
  const { getByText } = render(<CheckoutForm />);
  // Act
  const header = getByText(/checkout form/i);
  // Assert
  expect(header).toBeInTheDocument();
  // 💣
});

test("form shows success message on submit with form details", async () => {
  const { getByLabelText, getByTestId, getAllByText } = render(
    <CheckoutForm />
  );

  fireEvent.change(getByLabelText(/first name/i), {
    target: { value: "Joey" },
  });

  fireEvent.change(getByLabelText(/last name/i), {
    target: { value: "Wilson" },
  });

  fireEvent.change(getByLabelText(/address/i), {
    target: { value: "1801 Kalarama St NW" },
  });

  fireEvent.change(getByLabelText(/city/i), {
    target: { value: "Washington" },
  });

  fireEvent.change(getByLabelText(/state/i), {
    target: { value: "DC" },
  });

  fireEvent.change(getByLabelText(/zip/i), {
    target: { value: "20012" },
  });

  fireEvent.click(getAllByText(/checkout/i)[1]);

  getByTestId("successMessage");
});

// // Act
// const btnTest = getByTestId("check");
// fireEvent.click(btnTest);
// // Assert
// expect(btnTest).toBeInTheDocument;
// // 💣💣
