import supabase from "./supabase";
import { useNavigate } from "react-router";

export default function NavbarSession() {
  const navigate = useNavigate();
  return (
    <div>
      <h3 onClick={() => navigate("dashboard")}>Dashboard</h3>
      <h3 onClick={() => navigate("payment")}>Payment</h3>
      <h3 onClick={() => navigate("share")}>Share</h3>
      <h3 onClick={() => supabase.auth.signOut()}>Logout</h3>
    </div>
  );
}
