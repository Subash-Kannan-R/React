const Display = () =>{
    const students=[{id:1,name:'Arun'},{id:2,name:'Priya'}]
    console.log(students);

    return (
        <>
            <h1>Display Student Name</h1>
            {students.map(s => (
                <h2 key={s.id}>{s.name}</h2>
            ))}
        </>
    );
}
export default Display;