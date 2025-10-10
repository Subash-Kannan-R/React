import { useEffect, useState } from "react";

const  Emptydep = () =>{

    const [state,setState] = useState(0);

  useEffect(() => {
    document.title = `state ${state}`;
  }, []);

    const update = () =>{
        setState(prev => prev+1);
    }

    return(<>
         <h1>{state}</h1>
      <button
        onClick={update}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
>
        What next
      </button>
    
    </>)


}
export default Emptydep;