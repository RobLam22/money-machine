import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import Signup from "./Signup";

it("Should allow user to input their username", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText("Enter Email");
  await user.click(input);
  await user.keyboard("Testing Username");
  expect(input.value).equals("Testing Username");
});

it("Should allow user to input their password", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText("Enter Password");
  await user.click(input);
  await user.keyboard("Testing password");
  expect(input.value).equals("Testing password");
});

it("Should should check if passwords match", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const input1 = screen.getByPlaceholderText("Enter Password");
  const input2 = screen.getByPlaceholderText("Confirm Password");
  await user.click(input1);
  await user.keyboard("Testing password");
  await user.click(input2);
  await user.keyboard("Testing password");
  expect(input1.value).equals("Testing password");
  expect(input2.value).equals("Testing password");
});
