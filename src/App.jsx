import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import CounterSetter from "./components/Counter/CounterSetter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSet(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <CounterSetter onSet={handleSet} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
