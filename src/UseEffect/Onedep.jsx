import { useEffect, useState } from "react";

const Onedep = () =>{

    const [sla,setSla] = useState(0);

    useEffect(() =>{
        document.title = `sla ${sla}`;
    },[sla]);

    const increament = () =>{
        setSla(prev => prev + 1);
    }

    const decreament = () =>{
        setSla(prev => prev - 1);
    }

 return(<>
    <h1>{sla}</h1>
      <button
        onClick={increament}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">  ++
      </button>
      <button
        onClick={decreament}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">  --
      </button>
      
      </>)
    
    

}
export default Onedep;