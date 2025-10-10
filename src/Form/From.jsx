import { useState } from "react";
const Form = () =>{

    const[state,setState] = useState(" ");

    const Handlechange = (event) =>{
        setState(event.target.value);
    }
    const Handlesubmit = (event) =>{
        event.preventDefault();
        alert(`Form submitted with input: ${state}`);
    }

  return(<>
<form onSubmit={Handlesubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
  <label className="block mb-4">
    <span className="text-gray-700 font-semibold">Enter your name:</span>
    <input
      type="text"
      value={state}
      onChange={Handlechange}
      className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </label>
  <input
    type="submit"
    value="Submit"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded cursor-pointer"
  />
  <p>EnterName:{state}</p>
</form>



  </>)
    
} 
export default Form;





// form using map method show table stored data using array of object