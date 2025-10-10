const List = () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
    console.log(fruits);

    return (
        <>
            <h1>Fruits</h1>
            <ul>
                
                {fruits.map((element,index) =>(
                    <>
                    <li key = {index}> {index + 1} </li>
                    <li>{element}</li>
                    </>
                ))}
            </ul>
        </>
    );
}

export default List;