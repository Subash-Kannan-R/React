import Emptydep from "./Emptydep";
import Fetch from "./Fetch";
import Nodep from "./Nodep";
import Onedep from "./Onedep";

const App = () =>{
 return(
  <div>
    {/* <h1>No dependencies  / runs after every re-render</h1>
    <Nodep />

    <h1>Empty dependencies / runs only on mount</h1>
    <Emptydep />


    <h1>One dependencies / runs on mount + when the value change</h1>
    <Onedep /> */}



    <Fetch />
  </div>
 )
}
export default App;