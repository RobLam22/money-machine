import "./App.css";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

function App() {
  const [data, setData] = useState("");

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  const callUsers = async () => {
    const { data } = await supabase.from("Users").select();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    callUsers();
  }, []);

  return (
    <>
      <div>
        <p>{data[0] && data[0].username}</p>
      </div>
    </>
  );
}

export default App;
