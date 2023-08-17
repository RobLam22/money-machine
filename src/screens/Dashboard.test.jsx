import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import Dashboard from "./Dashboard";
import Navbar from "../Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

it("Make sure Dashboard is displayed", async () => {
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </AuthContextProvider>
    </BrowserRouter>
  );

  expect(screen.findByText("")).toBeInTheDocument();
});
