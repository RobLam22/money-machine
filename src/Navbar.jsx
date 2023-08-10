import { NavLink } from "./NavLink";
import { Outlet } from "react-router";

export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="how">
          <h3>How It Works</h3>
        </NavLink>
        <NavLink to="pricing">
          <h3>Pricing</h3>
        </NavLink>
        <NavLink to="features">
          <h3>Features</h3>
        </NavLink>
        <NavLink to="faq">
          <h3>FAQ</h3>
        </NavLink>
        <NavLink to="login">
          <h3>Login</h3>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
