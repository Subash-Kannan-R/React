import React, { useState } from "react";
function Fibo() {
  const [count, setCount] = useState(9);
  const [series, setSeries] = useState([]);

  const generateFibonacci = () => {
    let fib = [0, 1];

    for (let i = 2; i < count; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    setSeries(fib.slice(0, count));
  };

  return (
    <>
        <h2 className="text-xl font-bold mb-4 text-blue-600">Fibonacci Generator</h2>
        <p className="mb-4 text-gray-700">Sequence: {series.join(", ")}</p>
        <button
          onClick={generateFibonacci}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Generate Next
        </button>
    </>
  );
}


export default Fibo;
