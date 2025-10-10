import React, {useState} from 'react';
const Hooks_useState = () =>{
    const [name,setName] = useState("Subash");
    const updatename = () =>{
            setName("Kannan");
    }
        return(
            <>
                <h1>Name: {name}</h1>
                <button
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-8 py-3 text-base font-bold shadow-md hover:scale-105 transition-transform duration-200"
                    onClick={updatename}>
                     Click Me !
                </button>
            </>
        );
}

export default Hooks_useState;