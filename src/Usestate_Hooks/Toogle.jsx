import react, {useState} from 'react';
const Toogle = () =>{
    const[show,setShow] = useState(false);
    const trigger = () =>{
        setShow(!show);

    }
    return(<>
        <h1>{show ? "Hello World" : "Hoo"}</h1>
        <button
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-8 py-3 text-base font-bold shadow-md hover:scale-105 transition-transform duration-200"
                    onClick={trigger}>
                     Toogle Me !
                </button>
    </>)
}
export default Toogle;