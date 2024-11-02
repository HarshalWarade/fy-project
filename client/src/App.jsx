import { useState } from "react";

import Navbar from "./components/ui/Navbar";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1 className="bg-red-500 text-white p-5">This is some text</h1>
      <Button>Click Me</Button>

    </>
  );
}

export default App;
