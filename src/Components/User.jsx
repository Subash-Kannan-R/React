const User = () =>{
    const details = {name:'Sudhan', age:22, course:'MERN'}
    console.log(details);

    return(
        <>
        <h1>{details.name}</h1>
        <h2>{details.age}</h2>
        <h3>{details.course}</h3>
        </>
    )
}
export default User;