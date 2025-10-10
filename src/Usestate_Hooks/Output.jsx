import Age from "./Age";
import Counter from "./Counter";
import Fibo from "./Fibo";
import Hide from "./Hide";
import Hooks_useState from "./Hooks_useState";
import Toogle from "./Toogle";

const Output = () =>{

    return(<div>
        <Hooks_useState />
        <Age />
        <Toogle />
        <Counter />
        <Fibo />
        <Hide />
    </div>)
    

}
export default Output;