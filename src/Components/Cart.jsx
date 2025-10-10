const Cart = () =>{
    const cartitems = ['Laptop', 'Mobile', 'Tablet', 'SmartWatch'];
    console.log(cartitems);
    return(
        <>
        {cartitems.length>0 &&<p>you have{cartitems.length}items</p>}
    </>
    )
}

export default Cart;