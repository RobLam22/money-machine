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
  const input = screen.getByPlaceholderText("email");
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
  const input = screen.getByPlaceholderText("password");
  await user.click(input);
  await user.keyboard("Testing password");
  expect(input.value).equals("Testing password");
});
