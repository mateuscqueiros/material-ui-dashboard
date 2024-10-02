import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="outlined">Botão</Button>
    </>
  );
}

export default App;
