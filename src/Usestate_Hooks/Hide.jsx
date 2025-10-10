import React, { useState } from 'react';
const Hide = () =>{
    const [hide,setHide] = useState(true);
    const handle = () =>{
        setHide(prev => !prev);
  }
   return(
   <>
        <h1>{hide ? "Hide" : "Show"}</h1> 
        <button
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-8 py-3 text-base font-bold shadow-md hover:scale-105 transition-transform duration-200"
                    onClick={handle}>
                     Click Me !
                </button>
           
   </>)
}
export default Hide;