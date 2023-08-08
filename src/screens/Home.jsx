import supabase from "../supabase";
import { Navigate, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Logged in!
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <button onClick={() => navigate("About")}>About</button>
    </div>
  );
}
