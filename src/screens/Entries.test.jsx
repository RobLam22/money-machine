import { render, screen } from "@testing-library/react";
import { AuthContextProvider } from "../context/AuthContext";
import Entries from "./Entries";

it("Tests if the page is rendering properly", async () => {
  render(
    <AuthContextProvider>
      <Entries />
    </AuthContextProvider>
  );
  expect(await screen.findByText("Your Entries:")).toBeInTheDocument();
});
