const Product =() =>{

    const item = {id:101, name:"Laptop" , price:50000}
    console.log(item);

    return (
        <>
    
            <table border="1px">
                <tbody>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
                </tbody>
            </table>
           
        </>
    )
}
export default Product;