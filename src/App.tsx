import { useState } from "react";
import { AppProvider } from "./lib/provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <h1>Material Dashboard</h1>
    </AppProvider>
  );
}

export default App;
