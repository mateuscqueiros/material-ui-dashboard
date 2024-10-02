import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="outlined">Botão</Button>
    </>
  );
}

export default App;
