import { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const result = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  }, [count]); // ✔ recalculate only if count changes

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Expensive Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
export default Memo;
