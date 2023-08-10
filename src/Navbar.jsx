import supabase from "./supabase";
import { useNavigate } from "react-router";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <h3 onClick={() => navigate("how")}>How It Works</h3>
      <h3 onClick={() => navigate("pricing")}>Pricing</h3>
      <h3 onClick={() => navigate("features")}>Features</h3>
      <h3 onClick={() => navigate("faq")}>FAQ</h3>
      <h3 onClick={() => navigate("login")}>Login</h3>
    </div>
  );
}
