import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


//Arrange
//Act
//Assert

test("App renders Name field", () => {
  const { getByText } = render(<App />);
  const nameField = getByText(/First Name/i)
  expect(nameField).toBeInTheDocument
});

test("App renders Last name field", () => {
  const { getByText } = render(<App />);
  const nameLastField = getByText(/Last Name/i)
  expect(nameLastField).toBeInTheDocument
});
test("App renders email field", () => {
  const { getByText } = render(<App />);
  const emailField = getByText(/Email/i)
  expect(emailField).toBeInTheDocument
});
