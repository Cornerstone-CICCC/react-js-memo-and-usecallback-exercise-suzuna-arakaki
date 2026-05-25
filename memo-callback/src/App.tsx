import { useState } from "react";
import Profile from "./components/Profile";
import ProductsList from "./components/ProductsList";

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>MEMO - CALLBACK</h1>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <Profile firstname="Suzuna" lastname="Arakaki" />

      <ProductsList />
    </div>
  );
};

export default App;
