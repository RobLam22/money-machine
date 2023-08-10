import { NavLink as ReactRouterNavLink } from "react-router-dom";

export function NavLink({ to, children }) {
  return (
    <ReactRouterNavLink
      to={to}
      style={({ isActive }) => {
        return { color: isActive ? "red" : "blue" };
      }}
    >
      {children}
    </ReactRouterNavLink>
  );
}
