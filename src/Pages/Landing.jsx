import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
import Course from "../Components/Course";
import Display from "../Components/Display";
import Gest from "../Components/Guest";
import List from "../Components/List";
import Admin from "../Components/Login";
import Notify from "../Components/Notify";
import Product from "../Components/Product";
import Score from "../Components/Score";
import User from "../Components/User";
const Landing = () =>{
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Footer />
       <User />
            <Product />
            <List />
            <Display />
            <Admin />
            <Score />
            <Cart />
            <Notify />
            <Gest />
            <Course />
      
      </>
  );
 
}
export default Landing;