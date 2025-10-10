import { useState, useEffect } from "react";

const  Nodep =() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("UseEffect without dependency");
    document.title = `count ${count}`;
  } , );

 const  increment =() => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={increment}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Generate Next
      </button>
    </>
  );
}

export default Nodep;