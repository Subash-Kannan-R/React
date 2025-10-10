import React, {useState} from 'react';
const Age = () =>{ 
    const[age,setAge] = useState(0);
    const increament = () =>{
        setAge(age + 1);
    }
    return(<>
              <h1>Age : {age}</h1>
<button
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-8 py-3 text-base font-bold shadow-md hover:scale-105 transition-transform duration-200"
                    onClick={increament}>
                    calculate Age
                </button>
            </>    )

}
export default Age;