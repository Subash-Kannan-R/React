import React, { useRef } from "react";

function Example() {
  const textRef = useRef(null);

  // 📌 Function runs when user types
  const handleInput = () => {
    const textarea = textRef.current;
    textarea.style.height = "auto"; // Reset
    textarea.style.height = textarea.scrollHeight + "px"; // Grow
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <textarea
        ref={textRef}
        onInput={handleInput} // Directly attached here
        placeholder="Type something..."
        className="p-3 w-1/2 text-lg rounded-xl outline-none resize-none text-gray-900 shadow-lg"
        rows={1}
        style={{
          overflow: "hidden",
          minHeight: "40px",
          backgroundColor: "white",
        }}
      ></textarea>
    </div>
  );
}

export default Example;
