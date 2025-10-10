const Admin = () =>{
    const login = "true";
    console.log(login);

    return(
        
        <>
        <h1>{login?"Welcome Admin" : "Welcome User"}</h1>
        </>
    )
}
export default Admin;