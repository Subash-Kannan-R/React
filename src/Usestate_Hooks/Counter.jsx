import React, {useState} from 'react';
const Counter = () =>{
    const[count,setCount] = useState(0);
    const increament = () =>{
        setCount(count + 1);

    }
    const decreament = () =>{
        setCount(count - 1);
    }   
    const reset = () =>{
        setCount(0);
    }   
    return(<>
        <h1>Counter : {count}</h1>
                <button
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-8 py-3 text-base font-bold shadow-md hover:scale-105 transition-transform duration-200"
                    onClick={increament}>
                     increament Me !
                </button>
                        <button
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-8 py-3 text-base font-bold shadow-md hover:scale-105 transition-transform duration-200"
                    onClick={decreament}>
                     decreamentMe !
                </button>
                        <button
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-8 py-3 text-base font-bold shadow-md hover:scale-105 transition-transform duration-200"
                    onClick={   reset}>
                     reset Me !
                </button>
    </>)
   
}
export default Counter;